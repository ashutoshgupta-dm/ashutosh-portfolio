import React, { useMemo, useState } from 'react';
import { ArrowLeft, Download, ImagePlus, LockKeyhole, LogOut, RotateCcw, Save } from 'lucide-react';
import type { Project } from './types';
import {
  ADMIN_SESSION_KEY,
  cloneDefaultContent,
  imageFileToDataUrl,
  loadPortfolioContent,
  resetPortfolioContent,
  savePortfolioContent,
  sha256,
  type PortfolioContent,
} from './adminContent';

const OWNER_EMAIL = 'ratangup386@gmail.com';
// Password is stored only as a SHA-256 hash, not as plain text.
const OWNER_PASSWORD_HASH = '78ae50518e3aca6d75b54e56cc23a472d5b2c80863994685b6a89e9500aaecaa';

function downloadJson(content: PortfolioContent) {
  const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'portfolio-content.json';
  anchor.click();
  URL.revokeObjectURL(url);
}

export default function AdminPanel() {
  const [authenticated, setAuthenticated] = useState(
    () => window.sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true',
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [content, setContent] = useState<PortfolioContent>(() => loadPortfolioContent());
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);

  const projectCount = useMemo(() => content.projects.length, [content.projects.length]);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoginError('');
    const passwordHash = await sha256(password);
    if (email.trim().toLowerCase() !== OWNER_EMAIL || passwordHash !== OWNER_PASSWORD_HASH) {
      setLoginError('Email or password is incorrect.');
      return;
    }
    window.sessionStorage.setItem(ADMIN_SESSION_KEY, 'true');
    setAuthenticated(true);
    setPassword('');
  };

  const logout = () => {
    window.sessionStorage.removeItem(ADMIN_SESSION_KEY);
    setAuthenticated(false);
  };

  const updateProject = (index: number, patch: Partial<Project>) => {
    setContent((current) => ({
      ...current,
      projects: current.projects.map((project, projectIndex) =>
        projectIndex === index ? { ...project, ...patch } : project,
      ),
    }));
  };

  const handleImage = async (
    file: File | undefined,
    onComplete: (imageUrl: string) => void,
    maxWidth: number,
    maxHeight: number,
  ) => {
    if (!file) return;
    setBusy(true);
    setMessage('');
    try {
      onComplete(await imageFileToDataUrl(file, maxWidth, maxHeight));
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Image could not be updated.');
    } finally {
      setBusy(false);
    }
  };

  const save = () => {
    try {
      savePortfolioContent(content);
      setMessage('Changes saved in this browser. Open the public portfolio in this browser to preview them.');
    } catch {
      setMessage('The browser could not save the changes. Try smaller images.');
    }
  };

  const reset = () => {
    if (!window.confirm('Restore the original portfolio details in this browser?')) return;
    resetPortfolioContent();
    setContent(cloneDefaultContent());
    setMessage('Original details restored.');
  };

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-primary-bg text-main-white flex items-center justify-center px-5 py-12">
        <section className="w-full max-w-md rounded-2xl border border-white/10 bg-[#112438]/75 p-7 shadow-2xl">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-secondary-text hover:text-secondary-cyan">
            <ArrowLeft size={16} /> Back to portfolio
          </a>
          <div className="mt-8 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary-blue/15 text-secondary-cyan flex items-center justify-center border border-primary-blue/30">
              <LockKeyhole size={23} />
            </div>
            <div>
              <h1 className="font-heading text-2xl font-extrabold">Admin Panel</h1>
              <p className="text-sm text-secondary-text">Owner access only</p>
            </div>
          </div>
          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <label className="block">
              <span className="block text-xs font-bold uppercase tracking-wider text-secondary-cyan mb-2">Email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="username"
                className="w-full rounded-xl border border-white/10 bg-primary-bg/70 px-4 py-3 outline-none focus:border-secondary-cyan/60"
                required
              />
            </label>
            <label className="block">
              <span className="block text-xs font-bold uppercase tracking-wider text-secondary-cyan mb-2">Password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                className="w-full rounded-xl border border-white/10 bg-primary-bg/70 px-4 py-3 outline-none focus:border-secondary-cyan/60"
                required
              />
            </label>
            {loginError && <p className="rounded-lg border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">{loginError}</p>}
            <button type="submit" className="w-full rounded-xl bg-gradient-primary py-3 font-extrabold text-primary-bg">
              Log in as owner
            </button>
          </form>
          <p className="mt-6 text-xs leading-relaxed text-secondary-text/70">
            This is a browser-based admin gate. The password is hashed, but a static website cannot provide bank-level security without a backend.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-primary-bg text-main-white px-5 py-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <a href="/" className="inline-flex items-center gap-2 text-sm text-secondary-text hover:text-secondary-cyan">
              <ArrowLeft size={16} /> Public portfolio
            </a>
            <h1 className="mt-3 font-heading text-3xl font-extrabold">Portfolio Admin</h1>
            <p className="text-sm text-secondary-text">Edit profile and {projectCount} project cards.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => downloadJson(content)} className="admin-secondary-btn"><Download size={15} /> Export JSON</button>
            <button onClick={reset} className="admin-secondary-btn"><RotateCcw size={15} /> Reset</button>
            <button onClick={logout} className="admin-secondary-btn"><LogOut size={15} /> Logout</button>
          </div>
        </header>

        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 px-4 py-3 text-sm text-amber-100/90 mb-8">
          Saved edits appear only in this browser. To make them live for every visitor, export the JSON and permanently update/redeploy the website code.
        </div>

        <section className="admin-card mb-8">
          <h2 className="admin-heading">Profile</h2>
          <div className="grid gap-5 md:grid-cols-[180px_1fr]">
            <div>
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white/10 bg-[#10263b] mx-auto">
                <img src={content.profileImage} alt="Profile preview" className="w-full h-full object-contain object-center" />
              </div>
              <label className="admin-upload mt-4">
                <ImagePlus size={16} /> Change photo
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  onChange={(event) => handleImage(event.target.files?.[0], (profileImage) => setContent((current) => ({ ...current, profileImage })), 900, 900)}
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="admin-label">Name<input className="admin-input" value={content.profileName} onChange={(event) => setContent((current) => ({ ...current, profileName: event.target.value }))} /></label>
              <label className="admin-label">Role<input className="admin-input" value={content.profileRole} onChange={(event) => setContent((current) => ({ ...current, profileRole: event.target.value }))} /></label>
              <label className="admin-label sm:col-span-2">Location<input className="admin-input" value={content.profileLocation} onChange={(event) => setContent((current) => ({ ...current, profileLocation: event.target.value }))} /></label>
            </div>
          </div>
        </section>

        <div className="space-y-6">
          {content.projects.map((project, index) => (
            <section key={project.id} className="admin-card">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <p className="text-xs font-mono text-secondary-cyan uppercase tracking-widest">Project {index + 1}</p>
                  <h2 className="admin-heading mb-0">{project.title || 'Untitled Project'}</h2>
                </div>
                <label className="admin-upload">
                  <ImagePlus size={16} /> Cover image
                  <input
                    hidden
                    type="file"
                    accept="image/*"
                    onChange={(event) => handleImage(event.target.files?.[0], (imageUrl) => updateProject(index, { imageUrl }), 1400, 900)}
                  />
                </label>
              </div>
              <img src={project.imageUrl} alt="Project cover preview" className="w-full max-h-64 object-cover rounded-xl border border-white/10 mb-5" />
              <div className="grid gap-4 md:grid-cols-2">
                <label className="admin-label">Client / Brand name<input className="admin-input" value={project.title} onChange={(event) => updateProject(index, { title: event.target.value })} /></label>
                <label className="admin-label">Website URL<input className="admin-input" value={project.websiteUrl || ''} onChange={(event) => updateProject(index, { websiteUrl: event.target.value })} /></label>
                <label className="admin-label md:col-span-2">My Work — one point per line<textarea className="admin-input min-h-28" value={(project.myWorkPoints || []).join('\n')} onChange={(event) => updateProject(index, { myWorkPoints: event.target.value.split('\n').map((line) => line.trim()).filter(Boolean) })} /></label>
                <label className="admin-label md:col-span-2">About the Client<textarea className="admin-input min-h-32" value={project.description} onChange={(event) => updateProject(index, { description: event.target.value })} /></label>
              </div>
            </section>
          ))}
        </div>

        {message && <p className="mt-6 rounded-xl border border-secondary-cyan/20 bg-secondary-cyan/5 px-4 py-3 text-sm text-secondary-cyan">{message}</p>}
        <div className="sticky bottom-4 mt-8 flex justify-end">
          <button disabled={busy} onClick={save} className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-7 py-3.5 font-extrabold text-primary-bg shadow-xl disabled:opacity-50">
            <Save size={17} /> {busy ? 'Processing image…' : 'Save changes'}
          </button>
        </div>
      </div>
    </main>
  );
}
