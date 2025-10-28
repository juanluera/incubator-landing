import ApplicationForm from './ApplicationForm';
import { NETWORK_CONFIG } from '@/config/forms';

export default function NetworkForm() {
  return <ApplicationForm config={NETWORK_CONFIG} />;
}
