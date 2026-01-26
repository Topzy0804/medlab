import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#15803d] text-white font-sans">
      {/* Top Section: Help & Newsletter */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-10 border-b border-white/20">
        <div>
          <h3 className="text-xl font-bold mb-2">Need Help?</h3>
          <p className="text-sm opacity-90">Please feel free to contact our friendly reception staff with any medical enquiry, or call</p>
          <p className="text-lg font-semibold mt-1 text-[#bef264]">+234 123 456 7890</p>
        </div>

        <div className="flex flex-col md:flex-row md:items-end gap-0">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Subscribe Newsletter</h3>
            <input 
              type="text" 
              placeholder="Your email address" 
              className="w-full p-3 bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none" 
            />
          </div>
          <button className="bg-[#bef264] text-green-900 font-bold px-6 py-3 hover:bg-white transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Middle Section: Main Links */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 p-10">
        {/* Logo & Socials */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <span className="bg-white text-green-700 p-1 rounded">+</span> MediGrids
          </h1>
          <p className="text-sm opacity-80 leading-relaxed">
            There’s nothing in this story to make us think he was dreaming about riches.
          </p>
          <div className="flex gap-2">
            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <div key={i} className="p-2 bg-white/10 hover:bg-white/30 cursor-pointer transition-all">
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Useful Links</h4>
          <div className="grid grid-cols-2 gap-2 text-sm opacity-80">
            <div className="space-y-2">
              <p className="hover:translate-x-1 transition-transform cursor-pointer">About</p>
              <p className="hover:translate-x-1 transition-transform cursor-pointer">Team</p>
              <p className="hover:translate-x-1 transition-transform cursor-pointer">Before After</p>
              <p className="hover:translate-x-1 transition-transform cursor-pointer">Cost Calculator</p>
              <p className="hover:translate-x-1 transition-transform cursor-pointer">Working Hours</p>
            </div>
            <div className="space-y-2">
              <p className="hover:translate-x-1 transition-transform cursor-pointer">Appointment</p>
              <p className="hover:translate-x-1 transition-transform cursor-pointer">Gallery</p>
              <p className="hover:translate-x-1 transition-transform cursor-pointer">Timetable</p>
              <p className="hover:translate-x-1 transition-transform cursor-pointer">Departments</p>
              <p className="hover:translate-x-1 transition-transform cursor-pointer">Contact Us</p>
            </div>
          </div>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Opening Hours</h4>
          <div className="space-y-3 text-sm opacity-80">
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2"><Clock size={14}/> Mon - Tue</span>
              <span>08:30 - 18:30</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2"><Clock size={14}/> Wed - Thu</span>
              <span>08:30 - 18:30</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2"><Clock size={14}/> Friday</span>
              <span>08:30 - 18:30</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2"><Clock size={14}/> Saturday</span>
              <span>08:30 - 18:30</span>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Contact</h4>
          <div className="space-y-4 text-sm opacity-80">
            <p className="flex gap-3 items-start"><MapPin size={20} className="shrink-0" /> 23 New Design Str, Lorem Ipsum 10 Hudson Yards, USA</p>
            <p className="flex gap-3 items-center"><Phone size={16} /> +234 456 454 6677</p>
            <p className="flex gap-3 items-center"><Mail size={16} /> Mail. support@classigrids.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/10 py-6 px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-4 text-sm opacity-70">
          <p>Designed and Developed by GrayGrids</p>
          <div className="flex gap-6">
            <p className="hover:text-white cursor-pointer">Terms & Conditions</p>
            <p className="hover:text-white cursor-pointer">FAQ</p>
            <p className="hover:text-white cursor-pointer">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer