// Test fahadfahad user lookup
import { connectMongoose } from "./lib/mongoose.js";
import User from "./models/User.js";

async function checkFahadfahadUser() {
  try {
    console.log('Connecting to database...');
    await connectMongoose();
    
    console.log('Looking up fahadfahad user...');
    const user = await User.findOne({ 
      email: 'fahadfahad@gmail.com',
      authType: 'email'
    });
    
    if (user) {
      console.log('✅ User found!');
      console.log('User ID:', user._id);
      console.log('Name:', user.name);
      console.log('Email:', user.email);
      console.log('Role:', user.role);
      console.log('Auth Type:', user.authType);
      console.log('Has Password:', !!user.password);
      console.log('Image:', user.image ? 'Yes' : 'No');
      console.log('Image length:', user.image ? user.image.length : 0);
      
      // Check if image is too large
      if (user.image && user.image.length > 10000) {
        console.log('⚠️  WARNING: User image is very large:', user.image.length, 'characters');
        console.log('Image preview:', user.image.substring(0, 100) + '...');
      }
    } else {
      console.log('❌ User not found');
    }
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    process.exit(0);
  }
}

checkFahadfahadUser();