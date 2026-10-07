import { OpenPanel } from "@openpanel/web";

const clientId = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID;

// No client id (local dev, previews) means no analytics instead of a broken client.
export const op = clientId ? new OpenPanel({ clientId, trackScreenViews: true }) : null;
