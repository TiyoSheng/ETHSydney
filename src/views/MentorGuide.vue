<!-- mentorguide.vue -->
<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<template>
  <div class="min-h-screen bg-[#111] text-white font-chakra">
    <NavBar />

    <div class="container mx-auto px-6 py-8 pt-36 md:px-12">
      <div class="bg-[#111] border-2 border-[#525252] rounded-lg shadow-lg overflow-hidden">
        <!-- Hero Section -->
        <div class="relative">
          <img
            src="../assets/images/mentor-guide-banner.jpg"
            alt="Mentor Guide Banner"
            class="w-full h-64 md:h-96 object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
          <div class="absolute bottom-6 left-6">
            <h1 class="text-4xl md:text-5xl font-bold">Guide for Mentors</h1>
            <p class="text-lg md:text-2xl mt-2">Empowering teams to succeed at the hackathon</p>
          </div>
        </div>

        <!-- Content Section -->
        <div class="p-4 md:p-6 space-y-8 md:space-y-12">
          <!-- Event Info Section -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <!-- Venue Card -->
            <div class="bg-[#222] border-2 border-[#525252] rounded-lg p-4 md:p-5 text-center">
              <div class="mb-2">
                <!-- Venue Icon -->
                <svg class="w-12 h-12 mx-auto text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                  <!-- Building Icon -->
                  <path d="M4 22a1 1 0 01-1-1V4a1 1 0 011-1h7v5h6v13a1 1 0 01-1 1H4zm13-1V9h-4V5H5v16h12zM7 12h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z"/>
                </svg>
              </div>
              <h2 class="text-xl font-bold mb-1">Venue</h2>
              <p class="text-base">UNSW Founders</p>
            </div>

            <!-- Address Card -->
            <div class="bg-[#222] border-2 border-[#525252] rounded-lg p-4 md:p-5 text-center">
              <div class="mb-2">
                <!-- Location Marker Icon -->
                <svg class="w-12 h-12 mx-auto text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <!-- Location Icon -->
                  <path fill-rule="evenodd" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9a2 2 0 110-4 2 2 0 010 4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h2 class="text-xl font-bold mb-1">Address</h2>
              <p class="text-base">
                Michael Crouch Innovation Centre, UNSW Kensington, Entry via Gate 2 Avenue, Kensington, NSW 2033
              </p>
            </div>

            <!-- Date Card -->
            <div class="bg-[#222] border-2 border-[#525252] rounded-lg p-4 md:p-5 text-center">
              <div class="mb-2">
                <!-- Calendar Icon -->
                <svg class="w-12 h-12 mx-auto text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <!-- Calendar Icon -->
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z"/>
                </svg>
              </div>
              <h2 class="text-xl font-bold mb-1">Date</h2>
              <p class="text-base">Oct 25 5pm - Oct 27 5pm, 2024</p>
            </div>
          </div>

          <!-- Main Roles of a Mentor -->
          <div class="mt-12">
            <h2 class="text-3xl font-bold text-center mb-6">Main Roles of a Mentor</h2>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xl">
              <li class="flex items-start space-x-3">
                <span class="text-[#00ff00] text-2xl mt-1">✔</span>
                <span>Help brainstorm ideas for the challenge and solution.</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="text-[#00ff00] text-2xl mt-1">✔</span>
                <span>Provide advice in areas where you have expertise.</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="text-[#00ff00] text-2xl mt-1">✔</span>
                <span>Keep an eye on time as the schedule is often tight.</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="text-[#00ff00] text-2xl mt-1">✔</span>
                <span>Assist with dividing roles within the team.</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="text-[#00ff00] text-2xl mt-1">✔</span>
                <span>If the team gets stuck, help them move forward.</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="text-[#00ff00] text-2xl mt-1">✔</span>
                <span>Help select someone to deliver the final pitch.</span>
              </li>
            </ul>
          </div>

          <!-- Mentor Tips Section -->
          <div class="mt-12">
            <h2 class="text-3xl font-bold text-center mb-6">Mentor Tips</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Tip Cards -->
              <!-- Tip Card Template -->
              <div class="bg-[#222] border-2 border-[#525252] rounded-lg p-6 relative">
                <div class="absolute -top-5 -left-5 w-10 h-10 bg-gradient-to-r from-[#ABF8FF] to-[#CF4DFF] rounded-full flex items-center justify-center">
                  <span class="text-black font-bold text-xl">1</span>
                </div>
                <h3 class="text-xl font-bold mb-2">Know the End Goal</h3>
                <p class="text-base">
                  Understand the hackathon’s objectives. Help your team focus on the deliverables and key questions they need to address.
                </p>
              </div>
              <!-- Repeat Tip Cards with updated numbers and content -->
              <!-- Tip Card 2 -->
              <div class="bg-[#222] border-2 border-[#525252] rounded-lg p-6 relative">
                <div class="absolute -top-5 -left-5 w-10 h-10 bg-gradient-to-r from-[#ABF8FF] to-[#CF4DFF] rounded-full flex items-center justify-center">
                  <span class="text-black font-bold text-xl">2</span>
                </div>
                <h3 class="text-xl font-bold mb-2">Prepare in Advance</h3>
                <p class="text-base">
                  Spend some time researching the hackathon’s topic. Your relevant knowledge can significantly impact the team's progress.
                </p>
              </div>
              <!-- Continue with Tip Cards 3 to 9 -->
              <!-- ... [Tip Cards 3 to 9 go here, keeping the content the same] ... -->

              <!-- Tip Card 3 -->
              <div class="bg-[#222] border-2 border-[#525252] rounded-lg p-6 relative">
                <div class="absolute -top-5 -left-5 w-10 h-10 bg-gradient-to-r from-[#ABF8FF] to-[#CF4DFF] rounded-full flex items-center justify-center">
                  <span class="text-black font-bold text-xl">3</span>
                </div>
                <h3 class="text-xl font-bold mb-2">Be Present</h3>
                <p class="text-base">
                  Stay accessible to the teams. If you're unavailable at times, ensure they know how to reach you.
                </p>
              </div>

              <!-- Tip Card 4 -->
              <div class="bg-[#222] border-2 border-[#525252] rounded-lg p-6 relative">
                <div class="absolute -top-5 -left-5 w-10 h-10 bg-gradient-to-r from-[#ABF8FF] to-[#CF4DFF] rounded-full flex items-center justify-center">
                  <span class="text-black font-bold text-xl">4</span>
                </div>
                <h3 class="text-xl font-bold mb-2">Don't Hover</h3>
                <p class="text-base">
                  Give teams space to work. Be available for questions but avoid micromanaging their progress.
                </p>
              </div>

              <!-- Tip Card 5 -->
              <div class="bg-[#222] border-2 border-[#525252] rounded-lg p-6 relative md:col-span-2">
                <div class="absolute -top-5 -left-5 w-10 h-10 bg-gradient-to-r from-[#ABF8FF] to-[#CF4DFF] rounded-full flex items-center justify-center">
                  <span class="text-black font-bold text-xl">5</span>
                </div>
                <h3 class="text-xl font-bold mb-2">Ask the Right Questions</h3>
                <p class="text-base mb-2">
                  Guide the team to find solutions by asking insightful questions:
                </p>
                <ul class="list-disc list-inside space-y-1 text-base">
                  <li>Who is your target customer?</li>
                  <li>What’s unique about your solution?</li>
                  <li>How can you test assumptions quickly?</li>
                  <li>What’s the potential impact?</li>
                </ul>
              </div>

              <!-- Tip Card 6 -->
              <div class="bg-[#222] border-2 border-[#525252] rounded-lg p-6 relative">
                <div class="absolute -top-5 -left-5 w-10 h-10 bg-gradient-to-r from-[#ABF8FF] to-[#CF4DFF] rounded-full flex items-center justify-center">
                  <span class="text-black font-bold text-xl">6</span>
                </div>
                <h3 class="text-xl font-bold mb-2">Don't Push Your Ideas</h3>
                <p class="text-base">
                  Offer guidance but let the team make their own decisions. Provide resources instead of dictating solutions.
                </p>
              </div>

              <!-- Tip Card 7 -->
              <div class="bg-[#222] border-2 border-[#525252] rounded-lg p-6 relative">
                <div class="absolute -top-5 -left-5 w-10 h-10 bg-gradient-to-r from-[#ABF8FF] to-[#CF4DFF] rounded-full flex items-center justify-center">
                  <span class="text-black font-bold text-xl">7</span>
                </div>
                <h3 class="text-xl font-bold mb-2">Avoid Major Changes Midway</h3>
                <p class="text-base">
                  Focus on improving what the team already has instead of suggesting major changes halfway through.
                </p>
              </div>

              <!-- Tip Card 8 -->
              <div class="bg-[#222] border-2 border-[#525252] rounded-lg p-6 relative">
                <div class="absolute -top-5 -left-5 w-10 h-10 bg-gradient-to-r from-[#ABF8FF] to-[#CF4DFF] rounded-full flex items-center justify-center">
                  <span class="text-black font-bold text-xl">8</span>
                </div>
                <h3 class="text-xl font-bold mb-2">Let Them Decide</h3>
                <p class="text-base">
                  Encourage teams to make their own decisions. This is key to their learning and growth.
                </p>
              </div>

              <!-- Tip Card 9 -->
              <div class="bg-[#222] border-2 border-[#525252] rounded-lg p-6 relative">
                <div class="absolute -top-5 -left-5 w-10 h-10 bg-gradient-to-r from-[#ABF8FF] to-[#CF4DFF] rounded-full flex items-center justify-center">
                  <span class="text-black font-bold text-xl">9</span>
                </div>
                <h3 class="text-xl font-bold mb-2">Empower, Don't Discourage</h3>
                <p class="text-base">
                  Always encourage the team. Celebrate their progress, no matter how small.
                </p>
              </div>
            </div>
          </div>

          <!-- Need Help Section -->
          <div class="mt-12 text-center">
            <h2 class="text-3xl font-bold mb-4">Need Help?</h2>
            <p class="text-lg mb-6">
              For any questions, email us at
              <a href="mailto:hi@ethsydney.net" class="text-[#ABF8FF] hover:underline">hi@ethsydney.net</a>.<br />
              Or reach out on Telegram:
              <a href="https://t.me/bobjiang" class="text-[#ABF8FF] hover:underline">https://t.me/bobjiang</a>.
            </p>
            <div class="flex justify-center">
              <a
                href="mailto:hi@ethsydney.net"
                class="w-72 h-20 bg-gradient-to-r from-[#ABF8FF] to-[#CF4DFF] text-black font-bold text-2xl rounded-lg border-2 border-black flex items-center justify-center shadow-[5px_5px_0px_0px_#2B2B2B] hover:shadow-[6px_6px_0px_0px_#2B2B2B] transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Import the Chakra Petch font */
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&display=swap');

/* Extend Tailwind with custom font family */
.font-chakra {
  font-family: 'Chakra Petch', sans-serif;
}
</style>
