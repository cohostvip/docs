# Adding GTM to Cohost

To capture events from the Cohost platform, partners can add their GTM container directly through the Cohost dashboard.

## Option 1: Via Partner Settings (Recommended)

1. Log in to the Cohost Partner Dashboard
2. Navigate to **Site Settings > Integrations**
3. Paste your GTM container ID (e.g. `GTM-ABCDE12`)
4. Save and publish

Cohost will inject the GTM script on all your pages automatically.

## Option 2: Manual Script Injection

If needed, you can inject your GTM container manually by editing your layout:

```html
<!-- GTM Head -->
<script>...your GTM head code...</script>

<!-- GTM Body -->
<noscript><iframe src="..."></iframe></noscript>
```

> Use this only if you're self-hosting the Cohost frontend or have advanced requirements.
