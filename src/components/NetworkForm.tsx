import ApplicationForm from './ApplicationForm';
import { NETWORK_FORM_CONFIG } from '@/config/forms';

export default function NetworkForm() {
  return <ApplicationForm config={NETWORK_FORM_CONFIG} />;
}
