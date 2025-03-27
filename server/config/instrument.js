// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://0478400ec3dc11f798de4196895e0e34@o4509021812293632.ingest.us.sentry.io/4509021821730816",

  // Set sampling rate for profiling - this is evaluated only once per SDK.init
  profileSessionSampleRate: 1.0,
  integrations: [Sentry.mongooseIntegration()],
});
