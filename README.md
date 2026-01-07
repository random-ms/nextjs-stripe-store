# 💳 Next.js + Stripe Payments Starter

A streamlined, type-safe boilerplate for handling payments, subscriptions, and digital products. Built with **Next.js** (App Router), **Stripe**, and **Tailwind CSS**.

---



## ✨ Features

* **Next.js App Router**: Optimized for SEO and speed using Server Components.
* **Stripe Checkout**: Seamlessly redirect users to a secure, Stripe-hosted payment page.
* **Stripe Webhooks**: Robust backend handling for `checkout.session.completed` and other events.
* **Customer Portal**: Allow users to manage their own subscriptions and payment methods.
* **Server Actions**: Securely handle Stripe session creation without dedicated API routes.
* **Tailwind CSS**: Pre-styled pricing tables and checkout buttons.
* **TypeScript**: Full type definitions for Stripe objects and API responses.

---

## 🛠️ Tech Stack

| Tool | Purpose |
| :--- | :--- |
| **Next.js** | React Framework (App Router) |
| **Stripe Node** | Server-side Payment Processing |
| **Stripe SDK** | Client-side Stripe Elements |
| **Tailwind CSS** | Styling & UI Components |
| **TypeScript** | Static Typing |
| **Vercel** | Deployment & Hosting |

---

## 🚀 Getting Started

### 1. Prerequisites
* [Stripe Account](https://dashboard.stripe.com/) (Sign up for a free developer account)
* Node.js v18.17 or later

### 2. Environment Setup
Create a `.env.local` file in your root directory:

```env
# Stripe Keys (Found in Stripe Dashboard > Developers > API keys)
STRIPE_SECRET_KEY=sk_test_51...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51...

# Stripe Webhook Secret (Generated via Stripe CLI or Dashboard)
STRIPE_WEBHOOK_SECRET=whsec_...

# App URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
