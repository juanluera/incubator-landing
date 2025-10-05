import ApplicationForm from './ApplicationForm';
import { WAITLIST_FORM_CONFIG } from '@/config/forms';

export default function WaitlistForm() {
  return <ApplicationForm config={WAITLIST_FORM_CONFIG} />;
}