// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://5c24789c1ffc7940ec6bc953cb2b4c66@o4509021812293632.ingest.us.sentry.io/4509055646433280",

  integrations: [Sentry.mongooseIntegration()],

  // Set sampling rate for profiling - this is evaluated only once per SDK.init
  profileSessionSampleRate: 1.0,
});
