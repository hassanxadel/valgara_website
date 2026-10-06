# 🎨 SHOPIFY THEME UPLOAD GUIDE
## Converting Your React Website to a Shopify Theme

---

## 📋 **OVERVIEW**

This guide will walk you through converting your Valgara React website into a fully functional Shopify theme. We'll convert your React components to Shopify Liquid templates and upload them to your store.

**Estimated Time:** 2-3 hours

---

## 🛠️ **PREREQUISITES**

Before starting, ensure you have:
- ✅ A Shopify store (free trial or paid account)
- ✅ Your React project files ready
- ✅ Access to Shopify Admin
- ✅ Basic understanding of HTML/CSS

---

## 📦 **PHASE 1: PREPARE YOUR FILES (30 minutes)**

### **Step 1: Download Dawn Theme Base**

1. **Go to**: [github.com/Shopify/dawn](https://github.com/Shopify/dawn)
2. **Click**: "Code" > "Download ZIP"
3. **Extract** the ZIP file to your computer
4. **Rename folder** to: `valgara-theme`

### **Step 2: Organize Your React Assets**

**From your React project, identify these files:**

#### **A. Images & Assets**
- `public/images/logo.png` → Will go to `assets/`
- `public/images/` (all other images) → Will go to `assets/`
- `public/favicon.ico` → Will go to `assets/`
- `public/favicon.svg` → Will go to `assets/`

#### **B. Styles**
- `src/index.css` → Will be converted to `assets/valgara.css`
- `tailwind.config.ts` → Colors will be extracted to CSS variables

#### **C. Components to Convert**
- `src/components/HeroSection.tsx` → `sections/valgara-hero.liquid`
- `src/components/FeaturedProducts.tsx` → `sections/featured-products.liquid`
- `src/components/AboutSection.tsx` → `sections/about-section.liquid`
- `src/components/ContactSection.tsx` → `sections/contact-section.liquid`
- `src/components/Navigation.tsx` → `snippets/header.liquid` (part of)
- `src/components/Footer.tsx` → `snippets/footer.liquid`
- `src/components/ProductCard.tsx` → `snippets/product-card.liquid`

---

## 🎨 **PHASE 2: CREATE THEME STRUCTURE (45 minutes)**

### **Step 3: Set Up Theme Directory**

**Create this folder structure in your `valgara-theme` folder:**

```
valgara-theme/
├── assets/
│   ├── valgara.css
│   ├── valgara.js
│   ├── logo.png
│   └── [all your images]
├── config/
│   └── settings_schema.json
├── layout/
│   └── theme.liquid
├── sections/
│   ├── valgara-hero.liquid
│   ├── featured-products.liquid
│   ├── about-section.liquid
│   └── contact-section.liquid
├── snippets/
│   ├── header.liquid
│   ├── footer.liquid
│   └── product-card.liquid
└── templates/
    ├── index.liquid
    └── product.liquid
```

### **Step 4: Copy Assets**

1. **Copy all images** from `public/images/` to `valgara-theme/assets/`
2. **Copy favicon files** to `valgara-theme/assets/`

---

## 📝 **PHASE 3: CONVERT CSS (30 minutes)**

### **Step 5: Create valgara.css**

**Create `valgara-theme/assets/valgara.css`:**

1. **Copy your Tailwind colors** from `tailwind.config.ts`:
   ```css
   :root {
     --valgara-black: #0A0A0A;
     --valgara-charcoal: #1A1A1A;
     --valgara-bronze: #B8860B;
     --valgara-copper: #CD853F;
     --valgara-white: #FFFFFF;
     --valgara-gray: #A0A0A0;
   }
   ```

2. **Copy styles** from `src/index.css`:
   - Global styles
   - Animations
   - Focus styles
   - Button enhancements

3. **Add Shopify-specific styles:**
   ```css
   /* Shopify cart drawer */
   .cart-drawer {
     /* Your cart styles */
   }
   
   /* Product form */
   .product-form {
     /* Your form styles */
   }
   ```

---

## 🔧 **PHASE 4: CONVERT COMPONENTS TO LIQUID (60 minutes)**

### **Step 6: Create theme.liquid Layout**

**Create `valgara-theme/layout/theme.liquid`:**

```liquid
<!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="theme-color" content="#B8860B">
    
    <title>{{ page_title }}{% if current_tags %} &ndash; {{ 'general.meta.tags' | t: tags: current_tags.join(', ') }}{% endif %}{% if current_page != 1 %} &ndash; {{ 'general.meta.page' | t: page: current_page }}{% endif %}{% unless page_title contains shop.name %} &ndash; {{ shop.name }}{% endunless %}</title>
    
    {% if page_description %}
      <meta name="description" content="{{ page_description | escape }}">
    {% endif %}
    
    <!-- Styles -->
    {{ 'valgara.css' | asset_url | stylesheet_tag }}
    
    <!-- Scripts -->
    <script src="{{ 'valgara.js' | asset_url }}" defer></script>
    
    {{ content_for_header }}
  </head>
  
  <body class="template-{{ template.name | handle }}">
    {% section 'header' %}
    
    <main id="main-content" role="main">
      {{ content_for_layout }}
    </main>
    
    {% section 'footer' %}
  </body>
</html>
```

### **Step 7: Convert Hero Section**

**Create `valgara-theme/sections/valgara-hero.liquid`:**

```liquid
<div class="hero-section relative min-h-screen flex items-center justify-center bg-valgara-black overflow-hidden">
  <div class="absolute inset-0 z-0">
    <img 
      src="{{ section.settings.hero_image | image_url: width: 1920 }}"
      alt="{{ section.settings.hero_image.alt | escape }}"
      class="w-full h-full object-cover opacity-30"
      loading="eager"
    >
  </div>
  
  <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
    <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-valgara-white mb-6 tracking-wider">
      {{ section.settings.hero_title }}
    </h1>
    <p class="text-xl sm:text-2xl text-valgara-bronze mb-8 font-light">
      {{ section.settings.hero_subtitle }}
    </p>
    <a 
      href="{{ section.settings.hero_button_link }}"
      class="btn-enhance bg-valgara-bronze hover:bg-valgara-copper text-valgara-black font-bold py-5 px-10 text-xl tracking-wide transition-all duration-300 hover:scale-105 inline-block"
    >
      {{ section.settings.hero_button_text }}
    </a>
  </div>
</div>

{% schema %}
{
  "name": "Valgara Hero",
  "settings": [
    {
      "type": "text",
      "id": "hero_title",
      "label": "Hero Title",
      "default": "VALGARA"
    },
    {
      "type": "text",
      "id": "hero_subtitle",
      "label": "Hero Subtitle",
      "default": "NOT MADE TO BLEND IN"
    },
    {
      "type": "text",
      "id": "hero_button_text",
      "label": "Button Text",
      "default": "SHOP NOW"
    },
    {
      "type": "url",
      "id": "hero_button_link",
      "label": "Button Link",
      "default": "/collections/all"
    },
    {
      "type": "image_picker",
      "id": "hero_image",
      "label": "Hero Background Image"
    }
  ],
  "presets": [
    {
      "name": "Valgara Hero"
    }
  ]
}
{% endschema %}
```

### **Step 8: Convert Featured Products Section**

**Create `valgara-theme/sections/featured-products.liquid`:**

```liquid
<div class="featured-products py-12 sm:py-16 lg:py-20 bg-valgara-black">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-10">
      <h2 class="text-3xl sm:text-4xl font-bold text-valgara-white mb-4 tracking-wider">
        {{ section.settings.title }}
      </h2>
      <p class="text-valgara-gray text-sm sm:text-base">
        {{ section.settings.description }}
      </p>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {% for product in collections[section.settings.collection].products limit: section.settings.product_count %}
        {% render 'product-card', product: product %}
      {% endfor %}
    </div>
  </div>
</div>

{% schema %}
{
  "name": "Featured Products",
  "settings": [
    {
      "type": "text",
      "id": "title",
      "label": "Section Title",
      "default": "FEATURED PRODUCTS"
    },
    {
      "type": "textarea",
      "id": "description",
      "label": "Section Description"
    },
    {
      "type": "collection",
      "id": "collection",
      "label": "Collection"
    },
    {
      "type": "range",
      "id": "product_count",
      "label": "Number of Products",
      "min": 2,
      "max": 8,
      "step": 1,
      "default": 4
    }
  ],
  "presets": [
    {
      "name": "Featured Products"
    }
  ]
}
{% endschema %}
```

### **Step 9: Create Product Card Snippet**

**Create `valgara-theme/snippets/product-card.liquid`:**

```liquid
<div class="product-card bg-valgara-charcoal rounded-lg overflow-hidden border border-valgara-bronze/20 hover:border-valgara-bronze/40 transition-all duration-300 group">
  <a href="{{ product.url }}" class="block">
    <div class="relative overflow-hidden">
      <img 
        src="{{ product.featured_image | image_url: width: 600 }}"
        alt="{{ product.featured_image.alt | escape }}"
        class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      >
    </div>
    
    <div class="p-4 sm:p-6">
      <h3 class="text-valgara-white font-bold text-lg mb-2 group-hover:text-valgara-bronze transition-colors">
        {{ product.title }}
      </h3>
      <p class="text-valgara-gray text-sm mb-4 line-clamp-2">
        {{ product.description | strip_html | truncate: 100 }}
      </p>
      <div class="flex items-center justify-between">
        <span class="text-valgara-bronze font-bold text-xl">
          {{ product.price | money }}
        </span>
        {% if product.compare_at_price > product.price %}
          <span class="text-valgara-gray line-through text-sm">
            {{ product.compare_at_price | money }}
          </span>
        {% endif %}
      </div>
    </div>
  </a>
</div>
```

### **Step 10: Convert Navigation to Header**

**Create `valgara-theme/snippets/header.liquid`:**

```liquid
<header class="fixed top-0 left-0 right-0 z-50 bg-valgara-black/95 backdrop-blur-lg border-b border-valgara-bronze/10">
  <div class="container mx-auto px-6 sm:px-8 lg:px-4">
    <div class="flex items-center justify-between h-16 sm:h-20">
      <a href="{{ routes.root_url }}" class="focus:outline-none focus:ring-2 focus:ring-valgara-bronze rounded-lg">
        <img 
          src="{{ 'logo.png' | asset_url }}"
          alt="{{ shop.name }}"
          class="h-8 sm:h-10"
        >
      </a>
      
      <nav class="hidden md:flex items-center space-x-1 lg:space-x-2">
        {% for link in linklists.main-menu.links %}
          <a 
            href="{{ link.url }}"
            class="text-valgara-white hover:text-valgara-bronze transition-colors duration-300 font-medium px-4 py-2 rounded-lg text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-valgara-bronze"
          >
            {{ link.title }}
          </a>
        {% endfor %}
      </nav>
      
      <button 
        class="md:hidden text-valgara-white hover:text-valgara-bronze transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-valgara-bronze"
        id="mobile-menu-toggle"
        aria-label="Toggle menu"
      >
        <span class="menu-icon">☰</span>
      </button>
    </div>
  </div>
  
  <!-- Mobile Menu -->
  <div id="mobile-menu" class="md:hidden fixed inset-0 top-16 sm:top-20 bg-valgara-black/98 backdrop-blur-lg transform translate-x-full transition-transform duration-300">
    <div class="p-6">
      {% for link in linklists.main-menu.links %}
        <a 
          href="{{ link.url }}"
          class="block text-valgara-white hover:text-valgara-bronze py-4 text-lg border-b border-valgara-bronze/20"
        >
          {{ link.title }}
        </a>
      {% endfor %}
    </div>
  </div>
</header>
```

### **Step 11: Convert Footer**

**Create `valgara-theme/snippets/footer.liquid`:**

```liquid
<footer class="bg-valgara-charcoal py-8 sm:py-10 lg:py-12 border-t border-valgara-bronze">
  <div class="container mx-auto px-6 sm:px-8 lg:px-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
      <!-- Brand Column -->
      <div class="col-span-1 sm:col-span-2 space-y-4">
        <a href="{{ routes.root_url }}">
          <img 
            src="{{ 'logo.png' | asset_url }}"
            alt="{{ shop.name }}"
            class="h-10"
          >
        </a>
        <p class="text-valgara-gray text-sm leading-relaxed">
          {{ section.settings.footer_description }}
        </p>
      </div>
      
      <!-- Navigation Column -->
      <div class="space-y-3">
        <h3 class="text-valgara-bronze font-bold tracking-wide">NAVIGATION</h3>
        <ul class="space-y-2">
          {% for link in linklists.footer.links %}
            <li>
              <a href="{{ link.url }}" class="text-valgara-gray hover:text-valgara-bronze transition-colors">
                {{ link.title }}
              </a>
            </li>
          {% endfor %}
        </ul>
      </div>
      
      <!-- Contact Column -->
      <div class="space-y-3">
        <h3 class="text-valgara-bronze font-bold tracking-wide">CONTACT</h3>
        <a 
          href="mailto:{{ shop.email }}"
          class="text-valgara-white hover:text-valgara-bronze transition-colors"
        >
          {{ shop.email }}
        </a>
      </div>
    </div>
    
    <div class="border-t border-valgara-bronze/20 pt-6">
      <p class="text-valgara-gray text-xs text-center">
        © {{ 'now' | date: '%Y' }} {{ shop.name }}. All rights reserved.
      </p>
    </div>
  </div>
</footer>
```

### **Step 12: Create Index Template**

**Create `valgara-theme/templates/index.liquid`:**

```liquid
{% section 'valgara-hero' %}
{% section 'featured-products' %}
{% section 'about-section' %}
{% section 'contact-section' %}
```

---

## 📤 **PHASE 5: UPLOAD TO SHOPIFY (30 minutes)**

### **Step 13: Zip Your Theme**

1. **Select** the entire `valgara-theme` folder
2. **Right-click** > "Compress" (Mac) or "Send to > Compressed folder" (Windows)
3. **Name it**: `valgara-theme.zip`
4. **Verify** the ZIP contains all folders (assets, layout, sections, snippets, templates)

### **Step 14: Upload to Shopify**

1. **Log in** to your Shopify Admin
2. **Navigate to**: Online Store > Themes
3. **Click**: "Add theme" button (top right)
4. **Select**: "Upload ZIP file"
5. **Choose** your `valgara-theme.zip` file
6. **Wait** for upload to complete (1-2 minutes)

### **Step 15: Preview Your Theme**

1. **After upload**, you'll see "Valgara Theme" in your themes list
2. **Click**: "Actions" > "Preview"
3. **Review** your theme in a new window
4. **Check**:
   - ✅ Navigation works
   - ✅ Hero section displays
   - ✅ Products show (if you have products)
   - ✅ Footer displays correctly
   - ✅ Mobile menu works

### **Step 16: Publish Your Theme**

1. **If everything looks good**, go back to Themes
2. **Click**: "Actions" > "Publish"
3. **Confirm** the publish action
4. **Your theme is now live!** 🎉

---

## ⚙️ **PHASE 6: CONFIGURE THEME SETTINGS (30 minutes)**

### **Step 17: Customize Theme**

1. **In Themes**, click "Customize" on your published theme
2. **Configure each section**:

#### **Hero Section:**
- Upload hero background image
- Set hero title: "VALGARA"
- Set subtitle: "NOT MADE TO BLEND IN"
- Set button text: "SHOP NOW"
- Set button link: `/collections/all`

#### **Featured Products:**
- Select a collection to feature
- Set number of products (4 recommended)
- Add section title and description

#### **Header:**
- Upload your logo
- Set up navigation menu (Online Store > Navigation)

#### **Footer:**
- Add footer description
- Set up footer navigation menu
- Add contact email

### **Step 18: Set Up Navigation Menus**

1. **Go to**: Online Store > Navigation
2. **Create Main Menu**:
   - Home → `/`
   - Shop → `/collections/all`
   - About → `/pages/about` (create page first)
   - Contact → `#contact`
3. **Create Footer Menu**:
   - Privacy Policy → `/pages/privacy-policy`
   - Terms of Service → `/pages/terms-of-service`
   - Shipping Info → `/pages/shipping`
   - Returns → `/pages/returns`

---

## 🎨 **PHASE 7: ADD JAVASCRIPT FUNCTIONALITY (30 minutes)**

### **Step 19: Create valgara.js**

**Create `valgara-theme/assets/valgara.js`:**

```javascript
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('translate-x-full');
      document.body.style.overflow = mobileMenu.classList.contains('translate-x-full') ? 'unset' : 'hidden';
    });
  }
  
  // Close mobile menu on link click
  const mobileMenuLinks = mobileMenu?.querySelectorAll('a');
  mobileMenuLinks?.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
      document.body.style.overflow = 'unset';
    });
  });
  
  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('translate-x-full')) {
      mobileMenu.classList.add('translate-x-full');
      document.body.style.overflow = 'unset';
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
```

### **Step 20: Test All Functionality**

**Test these features:**
- ✅ Mobile menu opens/closes
- ✅ Navigation links work
- ✅ Smooth scrolling works
- ✅ Images load correctly
- ✅ Responsive design on mobile/tablet/desktop
- ✅ All sections display properly

---

## 🔧 **TROUBLESHOOTING**

### **Theme Upload Issues:**
- **"Invalid theme" error**: Check that all required folders exist (assets, layout, sections, snippets, templates)
- **"File too large" error**: Compress images before uploading
- **Missing files**: Verify all files are in the correct folders

### **Display Issues:**
- **Images not showing**: Check file paths use `asset_url` filter
- **CSS not applying**: Verify `valgara.css` is linked in `theme.liquid`
- **JavaScript not working**: Check browser console for errors

### **Section Issues:**
- **Sections not appearing**: Verify section files are in `sections/` folder
- **Settings not saving**: Check schema JSON is valid
- **Products not showing**: Ensure collection exists and has products

---

## ✅ **FINAL CHECKLIST**

Before going live, verify:
- [ ] All images uploaded to assets folder
- [ ] CSS file includes all styles
- [ ] JavaScript file includes all functionality
- [ ] Navigation menus configured
- [ ] All sections display correctly
- [ ] Mobile menu works
- [ ] Footer links work
- [ ] Theme is published
- [ ] Tested on mobile devices
- [ ] Tested on desktop browsers

---

## 🎉 **SUCCESS!**

Your Valgara React website has been successfully converted to a Shopify theme!

**Next Steps:**
1. Add your products through Shopify Admin
2. Configure payment settings
3. Set up shipping rates
4. Customize theme colors/settings as needed
5. Test the complete shopping experience

**Your theme is ready for customers! 🚀**

---

## 📚 **ADDITIONAL RESOURCES**

- **Shopify Theme Docs**: [shopify.dev/themes](https://shopify.dev/themes)
- **Liquid Reference**: [shopify.dev/liquid](https://shopify.dev/liquid)
- **Shopify Community**: [community.shopify.com](https://community.shopify.com)
- **Theme Support**: Contact Shopify Support via chat in Admin
