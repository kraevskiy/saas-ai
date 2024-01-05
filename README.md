# SaaS AI platform

Currently, use next stack:

| Task                     | Technology                              |
|--------------------------|-----------------------------------------|
| frontend tool            | [NextJS](https://nextjs.org/)           |
| styles                   | [TailwindCSS](https://tailwindcss.com/) |
| components libs          | [Shadcn/ui](https://ui.shadcn.com/)     |
| user management          | [Clerk](https://clerk.com/)             |

https://www.youtube.com/watch?v=ffJ38dBzrlY&t=501s

```dotenv
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=r.develop
CLERK_SECRET_KEY=r.develop

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPEN_API_KEY=k.freel

```
