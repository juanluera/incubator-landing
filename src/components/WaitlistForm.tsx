import ApplicationForm from './ApplicationForm';
import { WAITLIST_CONFIG } from '@/config/forms';

export default function WaitlistForm() {
  return <ApplicationForm config={WAITLIST_CONFIG} />;
}