// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserSite = owner && repo === `${owner}.github.io`;

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : undefined,
  base: repo && !isUserSite ? `/${repo}` : undefined,
  devToolbar: {
    enabled: false,
  },
});
