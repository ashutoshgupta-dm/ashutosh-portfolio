import React, { useState } from 'react';
import { 
  auth, 
  googleProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  OWNER_EMAIL,
  type User
} from '../lib/firebase';
import { Lock, Mail, Key, LogIn, ArrowLeft, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface AdminLoginProps {
  currentUser: User | null;
  onBackToPortfolio: () => void;
  onSignOut: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ currentUser, onBackToPortfolio, onSignOut }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const isOwner = currentUser?.email?.toLowerCase() === OWNER_EMAIL.toLowerCase();

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await signInWithPopup(auth, googleProvider);
      if (res.user.email?.toLowerCase() !== OWNER_EMAIL.toLowerCase()) {
        setError(`Access Denied: ${res.user.email} is not authorized. Only owner ${OWNER_EMAIL} can access admin controls.`);
      } else {
        setSuccess(`Welcome back, ${res.user.displayName || 'Owner'}! Navigating to admin workspace...`);
      }
    } catch (err: any) {
      console.error('Google Sign in error:', err);
      setError(err.message || 'Google authentication failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both email and password fields.');
      return;
    }

    if (email.trim().toLowerCase() !== OWNER_EMAIL.toLowerCase()) {
      setError(`Access Denied: ${email} is not authorized. Only ${OWNER_EMAIL} can log in as Admin.`);
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email.trim(), password);
        setSuccess('Admin account created successfully! You are now logged in.');
      } else {
        await signInWithEmailAndPassword(auth, email.trim(), password);
        setSuccess('Logged in successfully!');
      }
    } catch (err: any) {
      console.error('Email Auth error:', err);
      if (err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
        setError('Invalid credentials. If this is your first time, click "Initialize Password" below.');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('This email already has an owner account. Please sign in with your password.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters long.');
      } else {
        setError(err.message || 'Authentication failed.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary-bg flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle Ambient Background Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-blue/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Admin Card */}
      <div className="w-full max-w-md bg-[#0D1B2A] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 text-left relative">
        
        {/* Back Button */}
        <button
          onClick={onBackToPortfolio}
          className="inline-flex items-center space-x-1.5 text-xs text-secondary-text hover:text-secondary-cyan font-sans transition-colors mb-6 cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>Back to Public Portfolio</span>
        </button>

        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 rounded-xl bg-secondary-cyan/10 border border-secondary-cyan/20 text-secondary-cyan">
            <Lock size={22} />
          </div>
          <div>
            <h1 className="font-heading font-extrabold text-xl text-main-white">Admin Portal</h1>
            <p className="font-sans text-xs text-secondary-text">Authorized Owner Access Only</p>
          </div>
        </div>

        {/* If user is logged in but NOT owner */}
        {currentUser && !isOwner && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 space-y-3">
            <div className="flex items-start space-x-2">
              <ShieldAlert size={18} className="flex-shrink-0 mt-0.5" />
              <div className="text-xs">
                <p className="font-bold">Access Denied</p>
                <p className="mt-0.5 opacity-90">
                  Logged in as <span className="font-mono text-white">{currentUser.email}</span>. Only the owner (<span className="font-mono text-white">{OWNER_EMAIL}</span>) can access editing.
                </p>
              </div>
            </div>
            <button
              onClick={onSignOut}
              className="w-full py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 font-sans text-xs font-bold transition-all cursor-pointer"
            >
              Sign Out & Try Authorized Email
            </button>
          </div>
        )}

        {/* If user is logged in AND IS owner */}
        {currentUser && isOwner ? (
          <div className="space-y-4 text-center py-4">
            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/25 text-green-400 flex flex-col items-center space-y-2">
              <CheckCircle2 size={32} />
              <h2 className="font-heading font-bold text-base text-main-white">Authenticated as Portfolio Owner</h2>
              <p className="font-sans text-xs text-secondary-text font-mono">{currentUser.email}</p>
            </div>
            <button
              onClick={onBackToPortfolio}
              className="w-full py-3 rounded-xl bg-gradient-primary text-primary-bg font-sans font-extrabold text-sm tracking-wide hover:shadow-[0_0_20px_rgba(0,180,216,0.3)] transition-all cursor-pointer"
            >
              Enter Admin Workspace & Edit Portfolio
            </button>
            <button
              onClick={onSignOut}
              className="w-full py-2.5 rounded-xl border border-white/10 text-secondary-text hover:text-white hover:bg-white/5 font-sans text-xs transition-all cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        ) : (
          /* Authentication Form */
          <div className="space-y-5">
            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-sans leading-relaxed">
                {error}
              </div>
            )}

            {success && (
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-sans leading-relaxed">
                {success}
              </div>
            )}

            {/* Google OAuth Button */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-main-white font-sans text-xs font-semibold flex items-center justify-center space-x-2.5 transition-all cursor-pointer disabled:opacity-50"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Sign in with Google</span>
            </button>

            <div className="relative flex items-center justify-center my-2">
              <div className="border-t border-white/10 w-full" />
              <span className="bg-[#0D1B2A] px-3 text-[10px] uppercase font-mono text-secondary-text">Or Email Password</span>
            </div>

            <form onSubmit={handleEmailAuth} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-secondary-cyan uppercase">Owner Email</label>
                <div className="relative">
                  <Mail size={15} className="absolute left-3.5 top-3 text-secondary-text/60" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={OWNER_EMAIL}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-primary-bg border border-white/10 text-main-white text-xs focus:border-secondary-cyan focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-secondary-cyan uppercase">Password</label>
                <div className="relative">
                  <Key size={15} className="absolute left-3.5 top-3 text-secondary-text/60" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-primary-bg border border-white/10 text-main-white text-xs focus:border-secondary-cyan focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-primary text-primary-bg font-sans font-extrabold text-xs tracking-wider uppercase flex items-center justify-center space-x-2 hover:shadow-[0_0_15px_rgba(0,180,216,0.3)] transition-all cursor-pointer disabled:opacity-50"
              >
                <LogIn size={15} />
                <span>{loading ? 'Authenticating...' : isRegistering ? 'Initialize Password & Login' : 'Log In as Owner'}</span>
              </button>
            </form>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsRegistering(!isRegistering);
                  setError(null);
                  setSuccess(null);
                }}
                className="text-[11px] text-secondary-text hover:text-secondary-cyan underline font-sans transition-colors cursor-pointer"
              >
                {isRegistering ? 'Already created your password? Click here to Log In' : 'First time signing in? Set up password here'}
              </button>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-white/5 text-center">
          <p className="text-[10px] text-secondary-text/60">
            Protected by Firebase Security Rules. Public portfolio stays 100% read-only.
          </p>
        </div>

      </div>
    </div>
  );
};
