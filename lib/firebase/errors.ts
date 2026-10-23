/**
 * Maps Firebase Auth and Firestore error codes to friendly neo-brutalist error messages.
 */
export function getFirebaseErrorMessage(error: unknown): string {
  if (!error || typeof error !== 'object') {
    return 'An unexpected error occurred. Please try again.';
  }

  const err = error as { code?: string; message?: string };
  const code = err.code || '';

  switch (code) {
    // Auth errors
    case 'auth/invalid-email':
      return 'That email address format does not look right.';
    case 'auth/user-disabled':
      return 'This user account has been disabled.';
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Invalid email or password. Please verify your credentials.';
    case 'auth/email-already-in-use':
      return 'An account with this email address already exists. Try logging in instead.';
    case 'auth/weak-password':
      return 'Password is too weak. Please use at least 6 characters.';
    case 'auth/operation-not-allowed':
      return 'This sign-in method is currently disabled in Firebase Console.';
    case 'auth/popup-closed-by-user':
      return 'Sign-in cancelled. The Google popup was closed before finishing.';
    case 'auth/popup-blocked':
      return 'Google popup was blocked by your browser. Please allow popups for Kitbash.';
    case 'auth/cancelled-popup-request':
      return 'Another authentication popup is already active.';
    case 'auth/network-request-failed':
      return 'Network error: could not connect to Firebase. Check your internet connection.';
    case 'auth/too-many-requests':
      return 'Access temporarily blocked due to many failed attempts. Try again later.';

    // Firestore errors
    case 'permission-denied':
      return 'Permission denied: you must be signed in with the right permissions to perform this action.';
    case 'unavailable':
      return 'Database service is currently unreachable. Changes will be saved locally.';

    default:
      return err.message || 'An error occurred during authentication. Please try again.';
  }
}
