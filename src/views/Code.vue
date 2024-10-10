<!-- code.vue -->
<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<template>
  <div class="min-h-screen bg-[#111] text-white font-chakra">
    <NavBar />

    <div class="container mx-auto px-6 py-8 pt-24 md:px-12">
      <div class="bg-[#111] border-2 border-[#525252] rounded-lg shadow-lg overflow-hidden">
        <!-- Header Section -->
        <div class="py-8 text-center">
          <h1 class="text-4xl md:text-5xl font-bold">Code of Conduct</h1>
          <p class="text-lg md:text-2xl mt-2">ETHSydney Community Guidelines</p>
        </div>

        <!-- Content Section -->
        <div class="p-4 md:p-6 space-y-8 md:space-y-12">
          <!-- Hacker's Code of Conduct -->
          <div class="space-y-6">
            <h2 class="text-2xl md:text-3xl font-bold mb-4">Hacker’s Code of Conduct</h2>
            <p class="text-base md:text-lg">
              At ETHSydney's community hackathon, our goal is to promote collaboration and learning within the community. We greatly value the participation of every member and aim to ensure that all attendees have an enjoyable and rewarding experience. Accordingly, all participants are expected to demonstrate respect and courtesy toward others throughout the event. To clarify our expectations, all attendees and speakers are required to adhere to the following Code of Conduct, which will be enforced by the organizers.
            </p>
          </div>

          <!-- The Code -->
          <div class="space-y-6">
            <h3 class="text-xl md:text-2xl font-bold mb-4">The Code</h3>
            <p class="text-base md:text-lg">
              Harassment includes, but is not limited to, offensive verbal comments, hacks, or online activities related to gender, sexual orientation, physical or mental abilities, age, socioeconomic status, ethnicity, physical appearance, race, religion, use of inappropriate images, deliberate intimidation, stalking, inappropriate physical contact, and unwelcome attention. Participants who are asked to stop any harassing behavior are expected to comply immediately. Failure to do so may result in removal from the event.
            </p>
            <p class="text-base md:text-lg">
              This anti-harassment policy applies to everyone involved in the event, including partners, judges, mentors, volunteers, organizers, ETHSydney staff, and all attendees. Specifically, participants should avoid using inappropriate images, activities, or other materials in their hacks or during the event.
            </p>
            <p class="text-base md:text-lg">
              Please be mindful of the language you use. Remember that sexist, racist, and other exclusionary comments and hacks can be offensive to those around you.
            </p>
            <p class="text-base md:text-lg">
              If a participant engages in behavior that violates this Code of Conduct, the organizers may take any action they deem appropriate, including issuing a warning or expelling the offender from the event.
            </p>
            <p class="text-base md:text-lg">
              If you feel uncomfortable or believe there may be a potential violation of the Code of Conduct, please report it immediately to an event organizer or email us at <a href="mailto:hi@ethsydney.net" class="text-[#ABF8FF] hover:underline">hi@ethsydney.net</a>. All reporters have the right to remain anonymous.
            </p>
          </div>

          <!-- Event Rules & Conditions -->
          <div class="space-y-6">
            <h2 class="text-2xl md:text-3xl font-bold mb-4">Event Rules & Conditions</h2>
            <!-- Subsection: Eligibility and Consent -->
            <div class="space-y-4">
              <h3 class="text-xl md:text-2xl font-bold">Eligibility and Consent</h3>
              <p class="text-base md:text-lg">
                Participation in the ETHSydney Hackathon (hereafter "The Event") is subject to the following terms and conditions.
              </p>
              <p class="text-base md:text-lg">
                If you are under 18 years of age, you must obtain consent from a parent or guardian. They must agree to these conditions and submit a signed agreement prior to your attendance. As a minor, you acknowledge that you have read, understand, and intend to be bound by this agreement.
              </p>
            </div>

            <!-- Subsection: Facility Use and Safety -->
            <div class="space-y-4">
              <h3 class="text-xl md:text-2xl font-bold">Facility Use and Safety</h3>
              <p class="text-base md:text-lg">
                You must adhere to all rules and safety instructions pertaining to the venue and equipment during The Event.
              </p>
              <p class="text-base md:text-lg">
                Avoid taking unnecessary risks that could harm yourself or others while using the facilities.
              </p>
            </div>

            <!-- Subsection: Assumption of Responsibility -->
            <div class="space-y-4">
              <h3 class="text-xl md:text-2xl font-bold">Assumption of Responsibility</h3>
              <p class="text-base md:text-lg">
                You accept full responsibility for any damage or injury you may cause during your participation (whether to persons or property, including yourself or others).
              </p>
              <p class="text-base md:text-lg">
                You release ETHSydney, its partners, volunteers, staff, guests, and all other participants (collectively, the "Releasees") from any liability arising from your actions.
              </p>
              <p class="text-base md:text-lg">
                Participation is solely at your own risk, and this release reflects that understanding.
              </p>
            </div>

            <!-- Subsection: Intellectual Property Rights -->
            <div class="space-y-4">
              <h3 class="text-xl md:text-2xl font-bold">Intellectual Property Rights</h3>
              <p class="text-base md:text-lg">
                You (and your team) retain ownership of any developments you create during The Event, including all associated intellectual property rights.
              </p>
              <p class="text-base md:text-lg">
                You may gain access to third-party products, developments, or materials ("Third Party Materials") belonging to other participants, partners, or third parties.
              </p>
              <p class="text-base md:text-lg">
                Ownership of Third Party Materials remains with the original owners. Your rights to these materials are limited to those expressly granted by the owners.
              </p>
              <p class="text-base md:text-lg">
                Any APIs or software provided by partners are subject to their respective subscription terms and licenses.
              </p>
            </div>

            <!-- Subsection: Information Sharing -->
            <div class="space-y-4">
              <h3 class="text-xl md:text-2xl font-bold">Information Sharing</h3>
              <p class="text-base md:text-lg">
                The Event is a forum for open idea exchange. Any information you share is at your own discretion and risk.
              </p>
              <p class="text-base md:text-lg">
                Protecting your confidential information is your responsibility. Implement necessary confidentiality and security measures when disclosing information to others.
              </p>
              <p class="text-base md:text-lg">
                The Releasees are not responsible for safeguarding your information during The Event.
              </p>
            </div>

            <!-- Subsection: Media Release -->
            <div class="space-y-4">
              <h3 class="text-xl md:text-2xl font-bold">Media Release</h3>
              <p class="text-base md:text-lg">
                Organizers and partners of The Event, including ETHSydney (collectively, the "Organizers"), will record The Event through various media.
              </p>
              <p class="text-base md:text-lg">
                You grant the Organizers unrestricted rights to use your likeness, image, voice, opinions, and any images of your projects or materials ("Images") for promotional purposes.
              </p>
              <p class="text-base md:text-lg">
                This includes the right to use, reproduce, publish, and republish the Images in any form, without restriction, worldwide and in perpetuity.
              </p>
              <p class="text-base md:text-lg">
                The Organizers solely own the rights to the promotional materials ("Materials") that include your Images.
              </p>
              <p class="text-base md:text-lg">
                You waive any rights to inspect or approve the Materials or their use.
              </p>
              <p class="text-base md:text-lg">
                You release the Organizers from any liability related to the use of your Images, including any claims of distortion, alteration, or misrepresentation.
              </p>
            </div>

            <!-- Subsection: Data Sharing and Communication -->
            <div class="space-y-4">
              <h3 class="text-xl md:text-2xl font-bold">Data Sharing and Communication</h3>
              <p class="text-base md:text-lg">
                The Organizers may share your registration details, LinkedIn/GitHub profiles, project details, and other relevant information with Event partners.
              </p>
              <p class="text-base md:text-lg">
                Event partners may contact you during and after The Event.
              </p>
              <p class="text-base md:text-lg">
                By participating, you consent to receive communications from the Organizers and partners about their products, services, and future events.
              </p>
            </div>

            <!-- Subsection: Conduct and Identification -->
            <div class="space-y-4">
              <h3 class="text-xl md:text-2xl font-bold">Conduct and Identification</h3>
              <p class="text-base md:text-lg">
                Alcohol, drugs, or weapons are prohibited at all official ETHSydney events, except for alcohol served by the Organizers.
              </p>
              <p class="text-base md:text-lg">
                Participants are expected to act responsibly.
              </p>
            </div>

            <!-- Subsection: Waiver and Release -->
            <div class="space-y-4">
              <h3 class="text-xl md:text-2xl font-bold">Waiver and Release</h3>
              <p class="text-base md:text-lg">
                For valuable consideration, including permission to participate in The Event, you, on behalf of yourself and your representatives:
              </p>
              <ul class="list-disc list-inside space-y-2">
                <li>
                  Agree not to sue and release the Releasees, their owners, officers, agents, affiliates, employees, volunteers, and anyone associated with The Event from liability for any personal injury, property damage, or death arising from your use of the premises or participation in The Event, whether caused by negligence or otherwise.
                </li>
                <li>
                  Assume full responsibility for any risk of bodily injury, death, or property damage arising from your participation, whether to yourself or others, and whether caused by negligence or otherwise.
                </li>
              </ul>
            </div>
          </div>

          <!-- Rules on Pre-existing Work -->
          <div class="space-y-6">
            <h2 class="text-2xl md:text-3xl font-bold mb-4">Rules on Pre-existing Work</h2>
            <ul class="list-disc list-inside space-y-2">
              <li class="text-base md:text-lg">
                <strong>Start Fresh:</strong> Participants are not allowed to submit projects that existed before the event. You must begin working on your project only after hacking officially starts at the event kick-off.
              </li>
              <li class="text-base md:text-lg">
                <strong>No Early Work:</strong> Do not engage in any project-related activities before the official start time. This includes coding, designing assets, or any preparatory work.
              </li>
              <li class="text-base md:text-lg">
                <strong>Judging Criteria:</strong> Submissions will be judged solely on the work completed during the hackathon. Everyone is expected to build their projects from scratch during the event timeframe.
              </li>
              <li class="text-base md:text-lg">
                <strong>Existing Projects:</strong> If you are porting or continuing an existing project, you may still participate in The Event. However, you will not be eligible for Partner prizes or to be selected as a Finalist.
              </li>
              <li class="text-base md:text-lg">
                <strong>Version Control Requirement:</strong> To ensure that no pre-existing work is included in your submission, you must use version control for your code throughout the event.
              </li>
              <li class="text-base md:text-lg">
                <strong>Repository Guidelines:</strong> Repositories with single commits of large files without proper commit history will be assumed ineligible by default unless you can provide evidence to the contrary.
              </li>
            </ul>
          </div>

          <!-- Media Policy -->
          <div class="space-y-6">
            <h2 class="text-2xl md:text-3xl font-bold mb-4">Media Policy</h2>
            <!-- Subsection: Photography, Audio & Video Recording -->
            <div class="space-y-4">
              <h3 class="text-xl md:text-2xl font-bold">Photography, Audio & Video Recording</h3>
              <p class="text-base md:text-lg">
                By attending ETHSydney, you acknowledge and agree that the event, or any part of it, may be photographed or recorded by us or our partners. You consent to allow us, or any third party authorized by us, to use, distribute, broadcast, or globally share your image, name, voice, and words in perpetuity across various media platforms, including television, radio, film, newspapers, magazines, and future media formats. This permission applies before, during, and after the event, without requiring further approval or compensation. This consent also grants us the right to edit and use the media, whether alone or in combination with other content, and to allow others to do the same.
              </p>
              <p class="text-base md:text-lg">
                ETHSydney organizers are committed to respecting the privacy of our attendees. If you prefer not to be included in any media content, you may sign an opt-out form at the event, and we will ensure that ETHSydney and our partners respect your request.
              </p>
              <p class="text-base md:text-lg">
                Please note, however, that ETHSydney organizers cannot be held responsible for photographs, video, or audio recordings made by other attendees. If you have any questions regarding this policy, feel free to contact us at <a href="mailto:hi@ethsydney.net" class="text-[#ABF8FF] hover:underline">hi@ethsydney.net</a>.
              </p>
            </div>
          </div>

          <!-- Need Help Section -->
          <div class="mt-12 text-center">
            <h2 class="text-3xl font-bold mb-4">Need Assistance?</h2>
            <p class="text-lg mb-6">
              For any questions or concerns, please email us at
              <a href="mailto:hi@ethsydney.net" class="text-[#ABF8FF] hover:underline">hi@ethsydney.net</a>.
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
