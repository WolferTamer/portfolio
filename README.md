# How to Run
1. `cd .\portfolio\`
2. `npm install`
3. `npm run dev`

# How To Set Up Contact Form
1. Go to EmailJS and create an account
2. Connect your account to an email
3. Create a template that uses the variables `fname` `lname` `email` and `subject`
4. Copy the public key, email service id, and template id and assign them to environment variables named `VITE_EMAILJS_KEY` `VITE_SERVICE_ID` and `VITE_TEMPLATE_ID` respectively.
5. Restart the webapp

Current deployment can be found at https://portfolio-production-c619.up.railway.app/