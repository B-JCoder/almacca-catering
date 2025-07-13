# 🍽️ Al-Macca Caterers & Event Planner Website

A modern, professional catering website built with Next.js, featuring online ordering, WhatsApp integration, and comprehensive event planning services.

## 📁 Complete Folder Structure

\`\`\`
almacca-catering-website/
├── 📁 app/                          # Next.js App Router pages
│   ├── 📁 about/                    # About page
│   │   └── page.tsx                 # About us content
│   ├── 📁 api/                      # API routes (backend)
│   │   ├── 📁 chat/                 # Live chat API endpoints
│   │   │   ├── 📁 end-session/
│   │   │   ├── send-message/
│   │   │   └── start-session/
│   │   ├── 📁 create-payment-intent/ # Stripe payment creation
│   │   ├── 📁 confirm-payment/      # Payment confirmation
│   │   └── 📁 webhook/              # Stripe webhooks
│   ├── 📁 contact/                  # Contact page
│   │   └── page.tsx
│   ├── 📁 custom-plan/              # Custom package builder page
│   │   └── page.tsx
│   ├── 📁 gallery/                  # Image gallery page
│   │   └── page.tsx
│   ├── 📁 menu/                     # Menu display page
│   │   └── page.tsx
│   ├── 📁 offers/                   # Special offers page
│   │   └── page.tsx
│   ├── 📁 order/                    # Main ordering page
│   │   └── page.tsx
│   ├── 📁 packages/                 # Packages page
│   │   └── page.tsx
│   ├── 📁 payment/                  # Payment pages
│   │   ├── 📁 cancel/
│   │   └── 📁 success/
│   ├── 📁 services/                 # Services page
│   │   └── page.tsx
│   ├── globals.css                  # Global styles and animations
│   ├── layout.tsx                   # Root layout (wraps all pages)
│   └── page.tsx                     # Homepage
├── 📁 components/                   # Reusable React components
│   ├── 📁 LiveChat/                 # Live chat system
│   │   ├── AgentDashboard.tsx       # Admin chat interface
│   │   ├── ChatNotification.tsx     # Chat prompts
│   │   └── ChatWidget.tsx           # Main chat widget
│   ├── 📁 ui/                       # UI components (shadcn/ui)
│   │   ├── accordion.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── checkbox.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   ├── tabs.tsx
│   │   └── textarea.tsx
│   ├── AboutSection.tsx             # Homepage about section
│   ├── AnimatedCounter.tsx          # Number animations
│   ├── AnimationProvider.tsx        # Page transition animations
│   ├── ContactForm.tsx              # Contact form component
│   ├── CustomPackageBuilder.tsx     # Step-by-step package builder
│   ├── CustomPlanBuilder.tsx        # Alternative package builder
│   ├── EnhancedOrderPage.tsx        # Main ordering interface
│   ├── FAQSection.tsx               # Frequently asked questions
│   ├── FloatingElements.tsx         # Animated background elements
│   ├── Footer.tsx                   # Website footer
│   ├── HeroSlider.tsx               # Homepage hero carousel
│   ├── ImageGallery.tsx             # Photo gallery component
│   ├── LoadingSpinner.tsx           # Loading animations
│   ├── MenuFilters.tsx              # Menu filtering system
│   ├── MenuHero.tsx                 # Menu page hero section
│   ├── MenuSection.tsx              # Menu display component
│   ├── Navbar.tsx                   # Navigation bar
│   ├── NewsletterSection.tsx        # Email subscription
│   ├── OrderConfirmation.tsx        # Order success page
│   ├── OrderForm.tsx                # Order form component
│   ├── OrderModal.tsx               # Order popup modal
│   ├── PackageCard.tsx              # Individual package display
│   ├── PackageComparison.tsx        # Package comparison table
│   ├── PaymentForm.tsx              # Stripe payment form
│   ├── PaymentSummary.tsx           # Payment summary display
│   ├── ServicesPreview.tsx          # Services overview
│   ├── TestimonialsSection.tsx      # Customer reviews
│   └── WhatsAppButton.tsx           # WhatsApp contact button
├── 📁 hooks/                        # Custom React hooks
│   ├── use-mobile.tsx               # Mobile device detection
│   ├── use-toast.ts                 # Toast notifications
│   └── useLiveChat.ts               # Chat functionality
├── 📁 lib/                          # Utility functions
│   └── utils.ts                     # Helper functions
├── 📁 public/                       # Static assets
│   └── 📁 images/                   # Website images
│       ├── logo.jpeg                # Company logo
│       ├── hero-food.jpeg           # Hero section image
│       ├── eid-special.png          # Special menu image
│       ├── catering-service.png     # Service image
│       ├── book-daig.png            # Booking image
│       ├── menu-display.png         # Menu display image
│       └── food-display.jpeg        # Food presentation image
├── .env.local                       # Environment variables (create this)
├── next.config.mjs                  # Next.js configuration
├── package.json                     # Dependencies and scripts
├── tailwind.config.ts               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
└── README.md                        # This file
\`\`\`

## 🔍 Technologies Used

### **Frontend Technologies:**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React** - Component-based UI library

### **UI Components:**
- **shadcn/ui** - Pre-built accessible components
- **Radix UI** - Headless UI primitives
- **Lucide React** - Beautiful icons

### **Backend & APIs:**
- **Next.js API Routes** - Server-side functionality
- **Stripe** - Payment processing
- **WhatsApp Business API** - Direct messaging integration

### **Styling & Design:**
- **CSS Grid & Flexbox** - Modern layouts
- **CSS Animations** - Custom keyframe animations
- **Responsive Design** - Mobile-first approach
- **Custom CSS Variables** - Theme consistency

## 💻 How to Run in VS Code

### **Prerequisites:**
1. **Node.js** (version 18 or higher)
2. **VS Code** with these extensions:
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - TypeScript Importer
   - Prettier - Code formatter

### **Step-by-Step Setup:**

1. **Clone or Download the Project**
   \`\`\`bash
   # If using Git
   git clone <repository-url>
   cd almacca-catering-website
   
   # Or extract the downloaded ZIP file
   \`\`\`

2. **Open in VS Code**
   \`\`\`bash
   code .
   \`\`\`

3. **Install Dependencies**
   \`\`\`bash
   # Open VS Code terminal (Ctrl + `)
   npm install
   \`\`\`

4. **Create Environment File**
   Create `.env.local` in the root directory:
   \`\`\`env
   # Stripe Configuration (for payments)
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
   STRIPE_SECRET_KEY=sk_test_your_key_here
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
   
   # Database (optional)
   DATABASE_URL=your_database_url_here
   
   # Email Configuration (optional)
   SMTP_HOST=your_smtp_host
   SMTP_PORT=587
   SMTP_USER=your_email@domain.com
   SMTP_PASS=your_email_password
   \`\`\`

5. **Start Development Server**
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Open in Browser**
   Navigate to `http://localhost:3000`

### **VS Code Tips:**
- Use `Ctrl + Shift + P` → "TypeScript: Restart TS Server" if you see type errors
- Install "Auto Rename Tag" extension for easier HTML editing
- Use `Ctrl + Shift + F` to search across all files
- Use `F12` to go to component definitions

## 📦 Key Features Explained

### **1. WhatsApp Integration**
- **File:** `components/WhatsAppButton.tsx`
- **Purpose:** Direct customer communication
- **Features:**
  - Floating button with animations
  - Pre-filled messages
  - Business number integration
  - Tooltip on hover

### **2. Order System**
- **Files:** `components/EnhancedOrderPage.tsx`, `components/OrderModal.tsx`
- **Purpose:** Complete online ordering
- **Features:**
  - Menu browsing with filters
  - Package selection
  - Custom package builder
  - Real-time pricing
  - WhatsApp order submission

### **3. Payment Processing**
- **Files:** `components/PaymentForm.tsx`, `app/api/create-payment-intent/`
- **Purpose:** Secure online payments
- **Features:**
  - Stripe integration
  - Multiple payment methods
  - Order confirmation
  - Receipt generation

### **4. Live Chat System**
- **Files:** `components/LiveChat/`
- **Purpose:** Customer support
- **Features:**
  - Real-time messaging
  - Agent dashboard
  - Chat notifications
  - Session management

### **5. Responsive Design**
- **Files:** All component files
- **Purpose:** Works on all devices
- **Features:**
  - Mobile-first approach
  - Flexible grid layouts
  - Touch-friendly interfaces
  - Optimized images

## 🚀 Deployment

### **Vercel (Recommended):**
1. Push code to GitHub
2. Connect GitHub to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### **Other Platforms:**
- **Netlify:** Similar to Vercel
- **Railway:** Good for full-stack apps
- **DigitalOcean:** More control, requires setup

## 🔧 Customization

### **Colors & Branding:**
- Edit `tailwind.config.ts` for color scheme
- Update `app/globals.css` for custom styles
- Replace images in `public/images/`

### **Content:**
- Update menu items in `components/EnhancedOrderPage.tsx`
- Modify packages in the same file
- Change contact info in `components/Footer.tsx`

### **WhatsApp Number:**
- Update in `components/WhatsAppButton.tsx`
- Update in `components/OrderModal.tsx`

## 📞 Support

For technical support or customization requests:
- **Email:** developer@example.com
- **WhatsApp:** +92-333-3227339
- **Documentation:** Check component comments for detailed explanations

## 📄 License

This project is created for Al-Macca Caterers & Event Planner. All rights reserved.
\`\`\`

Finally, let's create a simple setup script to help with installation:
