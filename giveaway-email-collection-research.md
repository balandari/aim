# Giveaway Email Collection Research - March 7 TV Giveaway

Research conducted: January 18, 2026
Focus: Best-in-class giveaway entry and email collection experiences

---

## Executive Summary

Based on research of industry best practices, successful giveaway email collection balances three critical elements:

1. **Minimal friction** - Simple forms with only essential fields (name + email minimum)
2. **Trust signals** - Clear privacy statements, transparent rules, professional design
3. **Mobile-first design** - Most entries happen on phones, design accordingly

**Key insight:** People willingly share email addresses when the process is frictionless, the value is clear (TV giveaway), and they trust their information will be handled properly.

---

## Trust Signals That Encourage Email Sharing

### Essential Trust Elements

**Privacy Transparency:**
- Clear statement on how email will be used
- Explicit "we won't spam you" or "we'll only contact about this giveaway" messaging
- Link to full privacy policy (required for compliance)
- Visible unsubscribe/opt-out information
- GDPR-compliant consent checkboxes if applicable

**Legitimacy Signals:**
- Professional design aligned with Antiques in Moore brand
- Clear contest rules link
- Business contact information visible
- Physical location mentioned (builds local trust)
- Past winner photos/testimonials (if available from future giveaways)

**Value Clarity:**
- Prize prominently displayed (TV image, specifications)
- Clear explanation of what they're entering to win
- Drawing date clearly stated (March 7, 2026)
- How winner will be contacted

### Compliance Requirements

**GDPR Considerations (Even for US-based contests):**
- Applies if ANY entrant could be from EU
- Must clearly state purpose of data collection
- Must provide opt-in checkbox (not pre-checked)
- Must allow easy withdrawal of consent
- Must state data retention period
- Must be audit-able (timestamp of consent)

**CAN-SPAM Requirements:**
- Clear identification of sender
- Accurate subject lines
- Physical business address in emails
- Easy unsubscribe mechanism
- Honor opt-outs within 10 days

**Privacy Policy Minimums:**
- How data is collected
- How data will be used
- Whether shared with third parties
- How long data is stored
- User rights (access, deletion, opt-out)
- Contact method for privacy questions

**Official Rules Requirements:**
- Entry period dates
- Eligibility requirements (age, location)
- How to enter
- Prize details and value
- Drawing date and method
- How winner will be notified
- Odds of winning
- Privacy statement or link
- Platform disclaimers (if using social media)
- "No purchase necessary" statement

---

## UX Patterns for Giveaway Entry Forms

### Form Design Best Practices

**Minimal Fields:**
- Start with name + email only
- Optional: Phone number (for winner notification)
- Avoid asking for unnecessary data (reduces trust and completion)

**Format Options:**

1. **Classic Form** (All fields on one page)
   - Best for: Quick entries, desktop users
   - Pros: Fast, see all requirements upfront
   - Cons: Can feel overwhelming if too many fields

2. **Card Form** (One question per page)
   - Best for: Mobile users, guided experience
   - Pros: Less cognitive load, feels easier
   - Cons: Slightly slower, requires more clicks

**For March 7 Giveaway:** Classic form recommended - only 2-3 fields (name, email, optional phone)

### Mobile-First Considerations

**Critical Stats:**
- Majority of giveaway entries happen on mobile devices
- Forms must be mobile-responsive
- Touch targets must be large enough (minimum 44x44px)
- Keyboard should auto-focus on first field
- Email keyboard should appear for email field

**Mobile UX Patterns:**
- Large, clear input fields
- Minimal typing required
- Obvious submit button
- Progress indicator if multi-step
- Error messages inline, not at top
- Auto-advance to next field (if multi-step)

### Real-Time Validation

**Email Validation Layers:**

1. **Syntax Check** (Instant, client-side)
   - Valid format (user@domain.com)
   - No obvious errors (missing @, spaces, etc.)
   - Feedback: "Please enter a valid email address"

2. **Domain Verification** (API, real-time)
   - Domain exists and accepts email
   - Catches typos (gmial.com -> gmail.com)
   - Feedback: "Did you mean gmail.com?"

3. **SMTP Validation** (Optional, server-side)
   - Mailbox actually exists
   - Can receive mail
   - Tradeoff: Slower, may annoy users

**Recommended Approach for AIM:**
- Syntax check (instant, free, built-in)
- Domain verification (API services available)
- Skip SMTP check (too slow for entry form)

**Validation Services:**
- Abstract API (real-time validation)
- ZeroBounce (bulk + real-time)
- NeverBounce (enterprise-focused)
- Verifalia (free tier available)
- Most expect 95%+ accuracy rate

**User Feedback Best Practices:**
- Show validation errors inline, as user types
- Use clear, non-technical language
- Offer suggestions for common typos
- Green checkmark when valid
- Don't block submission on warnings (only errors)

### Form Placement Strategies

**Landing Page Approach:**
- Dedicated page for giveaway
- Prize image/details above fold
- Entry form immediately visible
- No distractions (no navigation, minimal links)
- Single call-to-action: Enter to win

**Embedded Approach:**
- Widget on main antiquesinmoore.com site
- Can appear on multiple pages
- Good for ongoing visibility
- Less focused than dedicated landing page

**Pop-up/Modal Approach:**
- Triggered by user action or time delay
- Higher conversion on announcement
- Can feel intrusive if poorly timed
- Good for "last chance" reminders

**For March 7 Giveaway:**
- Dedicated landing page: antiquesinmoore.com/tv-giveaway
- Embedded widget on homepage (during event period)
- Mobile-optimized for in-store entries

---

## Confirmation & Thank You Experience

### Immediate Confirmation

**On-Page Confirmation:**
- Instant feedback after submission
- "You're entered!" messaging
- Entry details displayed (name, email)
- Next steps clearly stated
- Social sharing buttons (optional)

**Confirmation Email (Auto-send):**
- Send within seconds of entry
- Subject: "You're entered to win! [TV Giveaway]"
- Content includes:
  - Thank you message
  - Entry confirmation (name, date entered)
  - Prize details reminder
  - Drawing date (March 7, 2026)
  - How winner will be contacted
  - Link to official rules
  - Antiques in Moore business info
  - Event details (Outdoor Pop-up)

### Thank You Page Best Practices

**Primary Goals:**
1. Confirm successful entry
2. Set expectations for next steps
3. Drive engagement (visit store, follow social, etc.)
4. Prevent immediate exit

**Effective Thank You Page Elements:**
- Large "You're Entered!" headline
- Entry number or confirmation code
- What happens next (drawing date, notification method)
- Secondary calls-to-action:
  - Visit us during Outdoor Pop-up (March 7)
  - Follow on Facebook for updates
  - Browse vendor highlights
  - Sign up for event notifications
- Share buttons ("Tell your friends!")
- Business contact info

**Avoid:**
- Generic "Thank you" with no context
- Dead-end page with nowhere to go
- Immediate redirect (feels incomplete)
- Asking for more information (too late)

### Email Follow-Up Sequence

**Recommended Sequence for TV Giveaway:**

1. **Immediate:** Entry confirmation (automated)
   - Sent: Within 1 minute of entry
   - Purpose: Confirm successful entry, set expectations

2. **Reminder:** 2-3 days before drawing (optional)
   - Sent: March 4-5, 2026
   - Purpose: Build excitement, drive event attendance
   - Content: "Drawing in 3 days! Join us March 7"

3. **Winner Announcement:** Day of or after drawing
   - Sent: March 7-8, 2026
   - Purpose: Notify winner, thank all participants
   - Two versions:
     - Winner: "You won! Here's how to claim"
     - Participants: "Winner announced, thank you for entering"

4. **Thank You + Offer:** 1-2 days after event (optional)
   - Sent: March 8-9, 2026
   - Purpose: Convert participants to customers
   - Content: Special discount, highlight from event, next giveaway teaser

**Best Practices:**
- Keep emails short and scannable
- Mobile-optimized (most will read on phone)
- Clear subject lines (avoid spam triggers)
- Unsubscribe link in footer (required by law)
- Send from recognizable sender name
- Include physical business address (CAN-SPAM)

---

## Technical Implementation Options

### Platform Comparison

#### 1. RafflePress (WordPress Plugin)
**Best for:** WordPress sites, simplicity, budget-friendly

**Pros:**
- Native WordPress integration
- Drag-and-drop builder
- Free version available (Pro: $39.20/year)
- Email service integration (Mailchimp, etc.)
- Viral sharing features (refer-a-friend)
- Random winner selection built-in

**Cons:**
- Requires WordPress site
- Less platform flexibility than Gleam
- Fewer advanced features

**Best Use Case:** If antiquesinmoore.com is WordPress-based, this is the easiest path.

#### 2. Gleam
**Best for:** Multi-platform contests, advanced features

**Pros:**
- Works on any website (embed or hosted page)
- Verifies entry actions automatically
- Supports social media integrations
- Free plan available ($10/month paid plans)
- More gamification options
- Can run contests across multiple platforms

**Cons:**
- More complex interface
- Steeper learning curve
- "Powered by Gleam" branding on free plan

**Best Use Case:** If you want flexibility and may run future contests across social media.

#### 3. Woobox
**Best for:** Social media-focused contests

**Pros:**
- Strong social media integration
- Unique campaign types (voting brackets, quizzes)
- Drag-and-drop editor
- Free plan with unlimited campaigns
- Paid plans from $37/month

**Cons:**
- More expensive than RafflePress
- Overkill for simple email collection
- Better suited for ongoing campaigns

**Best Use Case:** If giveaways become a regular marketing strategy with social amplification.

#### 4. Custom Form (Typeform, Jotform, Google Forms)
**Best for:** Complete control, minimal cost

**Pros:**
- Full customization
- No "powered by" branding
- Store entries in spreadsheet or database
- Free or very low cost
- Simple implementation

**Cons:**
- Manual winner selection
- No automatic verification
- More setup work
- No viral sharing features
- Must build email automation separately

**Best Use Case:** Simple, one-time giveaway with manual winner selection.

#### 5. Build Custom Solution
**Best for:** Full control, integration with antiquesinmoore.com

**Pros:**
- Complete control over UX/design
- Direct database integration
- No third-party fees
- Custom confirmation flow
- Matches site branding perfectly

**Cons:**
- Development time required
- Must handle email delivery (Mailgun, SendGrid, etc.)
- Must implement validation
- Must ensure GDPR/CAN-SPAM compliance
- Ongoing maintenance

**Best Use Case:** If giveaways become recurring strategy and you want tight integration with site.

### Recommended Stack for AIM TV Giveaway

**Option A: Quick Launch (Recommended for March 7 deadline)**
- **Form:** Typeform or Jotform (free tier)
- **Email:** Gmail or built-in confirmation
- **Storage:** Google Sheets (auto-sync from form)
- **Winner Selection:** Random.org or spreadsheet randomizer
- **Cost:** $0
- **Time:** 1-2 hours setup

**Option B: Professional (Better long-term)**
- **Platform:** RafflePress (if WordPress) or Gleam (if not)
- **Email Service:** Mailchimp free tier (up to 500 contacts)
- **Integration:** Embed on antiquesinmoore.com
- **Cost:** $0-$40/year
- **Time:** 2-4 hours setup

**Option C: Custom Build (Future consideration)**
- **Frontend:** React form on Next.js site
- **Backend:** API route to store entries
- **Database:** Supabase (PostgreSQL)
- **Email:** Mailgun or SendGrid API
- **Validation:** Abstract API or custom
- **Cost:** ~$25-50/month (hosting + email + validation)
- **Time:** 8-16 hours development

### Data Storage Considerations

**What to Collect:**
- Name (first + last)
- Email address (required)
- Phone number (optional, for winner notification)
- Entry timestamp (automatic)
- IP address (automatic, for duplicate prevention)
- Consent checkbox status (GDPR compliance)
- Entry source (in-store vs online, if tracking)

**Where to Store:**
- Secure database (encrypted)
- Backup regularly
- Retention policy (how long to keep entries)
- Deletion capability (GDPR right to erasure)

**Security Requirements:**
- HTTPS required (all data encrypted in transit)
- Database encrypted at rest
- No public access to entry list
- Audit log of who accesses data

---

## Privacy & Compliance Checklist

### Required Legal Documents

- [ ] Official Contest Rules page
  - [ ] Entry period dates
  - [ ] Eligibility (age 18+, Oklahoma residents, etc.)
  - [ ] How to enter
  - [ ] Prize description and value
  - [ ] Drawing date and method
  - [ ] Winner notification process
  - [ ] Odds of winning
  - [ ] No purchase necessary statement
  - [ ] Void where prohibited
  - [ ] Privacy statement or link

- [ ] Privacy Policy (or contest-specific addendum)
  - [ ] What data is collected (name, email, etc.)
  - [ ] Why data is collected (giveaway entry)
  - [ ] How data will be used (winner notification, optional marketing)
  - [ ] Whether data is shared (no third-party sharing recommended)
  - [ ] How long data is retained
  - [ ] How to opt out or request deletion
  - [ ] Contact for privacy questions

### Form Requirements

- [ ] Clear consent for data collection
- [ ] Checkbox: "I agree to the Official Rules" (required)
- [ ] Checkbox: "I agree to receive emails from Antiques in Moore" (optional, separate from entry)
- [ ] Link to Official Rules (visible, not buried)
- [ ] Link to Privacy Policy
- [ ] Age confirmation ("I am 18 or older")

### Email Requirements

- [ ] Clear sender name ("Antiques in Moore" not "noreply@...")
- [ ] Accurate subject lines
- [ ] Physical business address in footer
- [ ] Unsubscribe link in footer
- [ ] Honor unsubscribes within 10 days
- [ ] Don't sell/share email list

### Platform Disclaimers (if using social media)

- [ ] "This promotion is not sponsored by Facebook/Instagram/etc."
- [ ] "By entering, you release Facebook/Instagram/etc. from liability"
- [ ] Follow platform-specific contest rules

---

## Key Recommendations for March 7 TV Giveaway

### Critical Success Factors

1. **Simplicity over features**
   - Name + Email + Consent = Done
   - Don't ask for more information
   - 30 seconds or less to enter

2. **Mobile-first design**
   - Large touch targets
   - Minimal typing
   - Instant validation feedback
   - Thumb-friendly submit button

3. **Trust before conversion**
   - Clear privacy statement above form
   - Official rules link visible
   - Professional design matching store brand
   - Physical location mentioned

4. **Immediate confirmation**
   - On-page "You're entered!" message
   - Confirmation email within 1 minute
   - Clear next steps (drawing date, how notified)

5. **Legal compliance**
   - Official Rules page (required)
   - Privacy statement (required)
   - Age confirmation (required)
   - Unsubscribe capability (required)

### Phase 1: MVP for March 7 (Recommended)

**Platform:** Typeform or Jotform (free)
**Hosting:** Embed on antiquesinmoore.com/tv-giveaway
**Email:** Manual confirmation + Mailchimp for follow-up
**Winner Selection:** Random.org from spreadsheet
**Timeline:** 1 week to implement

**Form Fields:**
1. First Name
2. Last Name
3. Email Address (validated)
4. Phone Number (optional)
5. Age Confirmation checkbox
6. Official Rules agreement checkbox
7. Marketing opt-in checkbox (optional, separate)

**Follow-Up:**
- Immediate: Manual confirmation email (copy/paste for first few, then automate)
- March 4: Reminder email (2-3 days before)
- March 7: Winner notification + participant thank you
- March 8: Special offer to all participants (optional)

### Phase 2: Scaling for Future Giveaways

**Platform:** RafflePress or Gleam
**Integration:** Native to antiquesinmoore.com
**Email Service:** Mailchimp automation
**Features to Add:**
- Bonus entries for sharing on social
- Referral tracking (friend entries)
- Multiple entry methods
- Automated email sequences
- Entry analytics

---

## Example Giveaway Flow

### User Journey

1. **Discovery**
   - Sees social media post about TV giveaway
   - Clicks link to antiquesinmoore.com/tv-giveaway

2. **Landing Page**
   - Large TV image at top
   - Headline: "Win a 55" Smart TV!"
   - Subheadline: "Enter to win during our March 7 Outdoor Pop-up Event"
   - Entry form (4 fields visible)
   - Official Rules link below form
   - Privacy statement: "We'll only contact you about this giveaway and send occasional event updates. You can unsubscribe anytime."

3. **Form Interaction**
   - Taps first name field
   - Auto-advances to last name
   - Email field shows email keyboard
   - Real-time validation shows green checkmark when valid
   - Checks "I agree to Official Rules"
   - Optionally checks "Send me event updates"
   - Taps large "Enter to Win" button

4. **Confirmation**
   - Form disappears
   - Large "You're Entered!" message appears
   - Confirmation details shown:
     - "Thanks, [First Name]!"
     - "We'll draw the winner on March 7, 2026"
     - "If you win, we'll email you at [email]"
   - Secondary CTAs:
     - "Join us March 7 for the Outdoor Pop-up Event"
     - "Follow us on Facebook for updates"
   - Within 30 seconds: Email arrives

5. **Email Confirmation**
   - Subject: "You're entered to win the TV! - Antiques in Moore"
   - Preview: "Thanks for entering, [Name]. Drawing is March 7."
   - Body:
     - "You're officially entered!"
     - Prize details
     - Drawing date and time
     - How winner will be notified
     - Event details (March 7, location, hours)
     - Link to Official Rules
     - Unsubscribe link in footer

6. **Follow-Up (March 4)**
   - Subject: "TV Giveaway Drawing in 3 Days!"
   - Reminder about drawing
   - Encourage in-person attendance at event
   - Highlight other event activities

7. **Winner Announcement (March 7)**
   - Two email versions:
     - **Winner:** "You Won the TV! Here's How to Claim Your Prize"
     - **Participants:** "TV Giveaway Winner Announced - Thank You!"
   - Social media announcement (with winner permission)
   - In-store announcement during event

8. **Post-Event (March 8)**
   - Thank you email to all participants
   - Recap of event highlights
   - Special offer: "Thanks for entering - 10% off any purchase this week"
   - Tease next giveaway or event

---

## Sources

### Giveaway UX & Design:
- [RafflePress: 12 Proven Giveaway Landing Page Examples for 2026](https://rafflepress.com/giveaway-landing-page-examples/)
- [ConvertFlow: 6 Giveaway Landing Page Examples to Copy](https://www.convertflow.com/campaigns/giveaway-landing-pages)
- [Jotform: Create Free Giveaway Forms](https://www.jotform.com/form-templates/lead-generation/giveaway-forms)
- [Typeform: Giveaway Entry Form Template](https://www.typeform.com/templates/giveaway-entry-form-template)

### Privacy & Compliance:
- [Launchpad6: How to Run a GDPR Compliant Contest](https://www.launchpad6.com/post/2018/04/29/how-do-you-run-a-gdpr-compliant-contest)
- [Woobox Blog: GDPR Compliant Giveaways, Contests, and Quizzes](https://blog.woobox.com/2018/05/how-to-run-gdpr-compliant-giveaways-contests-and-quizzes/)
- [TermsFeed: Privacy Policies for Sweepstakes](https://www.termsfeed.com/blog/privacy-policy-sweepstakes/)
- [Vertical Response: Email Marketing Regulations Guide](https://verticalresponse.com/blog/email-marketing-regulations-a-comprehensive-guide-to-compliance/)

### Confirmation & Follow-Up:
- [KickoffLabs: 5 Email Templates After Giveaway Signup](https://kickofflabs.com/blog/5-email-templates-to-send-after-someone-signs-up-to-your-giveaway/)
- [Designmodo: Giveaway Emails Essentials & Best Practices](https://designmodo.com/giveaway-emails/)
- [CXL: Creating The Perfect Thank You Page](https://cxl.com/blog/thank-you-page/)
- [Mailchimp: How to Use Giveaway Emails](https://mailchimp.com/resources/giveaway-email/)

### Platform Comparisons:
- [RafflePress: Gleam vs RafflePress Comparison](https://rafflepress.com/rafflecopter-vs-gleam-vs-rafflepress/)
- [WPForms: Rafflecopter vs Gleam vs RafflePress](https://wpforms.com/rafflecopter-vs-gleam-vs-rafflepress/)
- [Gleam Blog: Best Giveaway Tools](https://gleam.io/blog/best-giveaway-tools/)

### Email Validation:
- [Reform: Email Validation Best Practices](https://www.reform.app/blog/email-validation-best-practices-for-online-forms)
- [MailerSend: Real-Time Email Address Validation](https://www.mailersend.com/blog/real-time-email-verification)
- [Abstract API: Real-Time Email Validation Guide](https://www.abstractapi.com/guides/real-time-email-validation)
- [Verified.email: Email Verification Best Practices 2026](https://verified.email/blog/email-verification/email-verification-best-practices)

### Official Rules:
- [Woobox Blog: Contest Rules Template](https://blog.woobox.com/2019/09/social-media-contest-rules-starter-template-example-guide/)
- [ShortStack: Social Media Sweepstakes Rules Template](https://help.shortstackapp.com/hc/en-us/articles/231757027-Social-Media-Sweepstakes-Rules-Includes-Template)
- [Woorise: Free Giveaway Rules Generator](https://woorise.com/tools/rules-generator)

---

## Next Steps

1. **Immediate (This Week):**
   - Review findings with Dad
   - Decide on platform (recommend Typeform/Jotform for MVP)
   - Draft Official Rules document
   - Draft Privacy Statement

2. **Week of Jan 20:**
   - Set up chosen platform
   - Design entry form
   - Create confirmation email template
   - Test mobile experience

3. **Week of Jan 27:**
   - Create landing page (antiquesinmoore.com/tv-giveaway)
   - Integrate form
   - Set up email automation
   - Final testing (desktop + mobile)

4. **Week of Feb 3:**
   - Soft launch (test with family/friends)
   - Fix any issues
   - Prepare marketing materials

5. **Week of Feb 10:**
   - Public launch
   - Promote on social media
   - Monitor entries and troubleshoot

6. **March 4:**
   - Send reminder email
   - Final promotion push

7. **March 7:**
   - Drawing during Outdoor Pop-up Event
   - Winner notification
   - Thank you emails to all participants

8. **March 8:**
   - Post-event follow-up
   - Capture learnings for future giveaways
