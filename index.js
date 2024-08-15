const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/blogs", (req, res) => {
  res.status(200).json({
    message: "Get blogs successfully",
    data: [
      {
        title: "A teacher’s guide to different types of assessments",
        image:
          "https://explaineverything.com/wp-content/uploads/2024/07/casualfilms_k12_9646_1121.jpg",
        discrible:
          "Assessments are an essential part of education. While many people have a misconception that an assessment is always the final goal, different types of assessments can – and should – take place throughout the academic year. ",
        content: `Exploring different assessment types
Assessments are an essential part of education. While many people have a misconception that an assessment is always the final goal, different types of assessments can – and should – take place throughout the academic year. 

The right type of assessment helps teachers understand what their students have learned and the areas they need to improve on. They also enable students to better recognize their strengths and weaknesses, too.

Three of the most common assessment types are diagnostic, formative, and summative.

Diagnostic assessment
Also known as a pre-test, a diagnostic assessment establishes what knowledge a student possesses before formal learning begins. Teachers can then use this information to alter their lessons accordingly and tailor the amount of attention each pupil receives. 

Because a diagnostic assessment aims to understand students’ existing knowledge, strengths, and weaknesses, it will not count toward grades. The goal is to improve teaching by recognizing areas that need improvement; it’s never to judge students for what they do not know.`,
      },
      {
        title:
          "Examples of SMART goals and objectives or teachers and students",
        image:
          "https://explaineverything.com/wp-content/uploads/2024/06/gettyimages-1291370118-1-1536x1024.jpg",
        discrible:
          "SMART goals in education According to leading theorists Locke and Latham, students who set specific goals perform better at school than those who do not. Teachers can enhance their pupils’",
        content: `SMART goals in education
According to leading theorists Locke and Latham, students who set specific goals perform better at school than those who do not. Teachers can enhance their pupils’ performances by incorporating goal-setting into the classroom. But that’s not the only way goals can help in education. Goal setting is also important in career development, so teachers can—and should—set goals for themselves.

The SMART methodology can help teachers and students to construct robust, specific goals. Teachers can use SMART objectives and goals to improve lesson structures, support their pupils’ education, and boost their career progression. 

What are SMART goals?
SMART goals are goals with a structured framework that make them more realistic to achieve. People can use SMART goals for various purposes, including education, career growth, and personal development.

SMART is an acronym which stands for the five things a goal needs to be: 

Specific
Measurable
Attainable
Relevant
Time-bound
S – Specific
SMART goals should clearly define the final achievement, who is responsible for it, and what steps a person needs to take to achieve it.

For example, a specific SMART goal for a pupil could be: “I will score over 80% on the end-of-term spelling test by making flashcards for any previous mistakes and revising for one hour every week.” The student is less likely to achieve a generic goal like “I will improve my spelling” as it’s unclear how they can get there.

M – Measurable
By quantifying your goals, you can objectively measure your achievement. It’s also easier to track your progress. 

You should create a measurement framework to make a goal measurable. So, if a teacher wants to improve classroom satisfaction, they must set a benchmark. With Explain Everything digital whiteboards, teachers can invite their students to draw on the whiteboards and write a number based on how much they enjoyed or learned from a certain activity. Teachers can then take screenshots and measure the average scores over time.

A  – Attainable
Goals need to be achievable – but not too easy.

You should also consider what you can control. It’s not necessarily achievable for a child to be “the best at basketball in school,” as they cannot control the progress of their peers. However, they can set themselves goals of how often they’ll practice and how much they’ll improve their shot accuracy.

R  – Relevant
You need to understand why you’re setting a goal. 

If a teacher wants to be a subject head, they might set SMART goals around furthering their knowledge and improving professional skills. General SMART goals relating to improving efficiency are probably less relevant, unless this was the reason they were being held back from promotion. 

Some SMART methodologies use ‘Realistic’ as the ‘R’ instead. For a goal to be realistic, you need to be able to achieve it within the timeframe and with the resources available. 

T  – Time-bound
It should be clear when the goal needs to be completed. 

To ensure SMART goals are effectively implemented in education, consider using time frames such as school terms, semesters, or years.`,
      },
      {
        title: "How to use affinity diagrams to empower students",
        image:
          "https://explaineverything.com/wp-content/uploads/2024/06/gettyimages-1021823026-1-1536x864.jpg",
        discrible:
          "While affinity diagrams are perhaps most used by user experience (UX) professionals, teachers can adapt the process to suit educational settings. Educators can use it as a teaching tool to encourage free thinking; it even has its place as a revision method.",
        content: `Affinity mapping in education
Affinity mapping is a way of organizing thoughts from brainstorming. 

While affinity diagrams are perhaps most used by user experience (UX) professionals, teachers can adapt the process to suit educational settings. Educators can use it as a teaching tool to encourage free thinking; it even has its place as a revision method. Because affinity mapping is an extension of brainstorming, it gives pupils the freedom to explore their thoughts. This can be an empowering learning experience. 

Affinity mapping has traditionally been completed with sticky notes on walls or whiteboards. But with today’s technology, such as Explain Everything’s online whiteboard, you can digitize the process – introducing new opportunities for collaboration and making it easier to save findings. 

What is an affinity diagram?
An affinity diagram, also known as an affinity chart or affinity map, is a visual method of organizing thoughts from a brainstorming session. 

It works by the participants organizing their brainstorming findings (usually on sticky notes or a digitalized equivalent) into groups. They then give a name to the different categories. For example, a group of students may brainstorm the topic “What makes a good story?”. They may come up with varied points and could then group these into categories like “Characters”, “Plot”, and “Writing style”. From this view, they can then understand the themes they’ve identified through brainstorming and specific callouts.

Affinity diagrams are also known as the KJ Technique, named after its creator, Jiro Kawakita. With the KJ Method, it’s crucial to vote for the most important groups and rank them accordingly. This can be used when a group agrees on an idea that they want to focus on or consider the most important. However, it will not always have its place in education. For example, suppose students are using affinity diagrams as a way of visualizing their knowledge of a subject rather than suggestions for things they want to change. In that case, it’s not appropriate to rank the groups. If ranking isn’t needed, you may want to consider affinity diagrams complete after the grouping process.`,
      },
      {
        title: "How to draw notes? Sketchnoting using a whiteboard",
        image:
          "https://explaineverything.com/wp-content/uploads/2024/03/sketchnoting-cover-1536x768.png",
        discrible:
          "How to draw notes online? Sketchnoting, or visual notetaking, is a textbook practical application of what’s called dual coding theory, thanks to how it combines both words and images to convey a message. Sketchnoting is based on low-complexity visual outputs, typically a combination of dots, lines, circles, squares and triangles. ",
        content: `How to draw notes, and what is sketchnoting?
Rohde defines sketchnotes as “visual maps combining written words and images while providing structure through variations of frames, dividers, bullets, icons, and connectors such as lines and arrows”. So essentially, these types of notes are visual maps which combine written words and images. 

Adding sketches to your daily teaching and learning can help you improve your retention of the materials you work with and your memory more broadly. Sketchnoting can turn traditional notes into meaningful interpretations of discussions, lectures and knowledge gained. 

Research and theory on summarizing how to draw notes
According to the book “Classroom Instruction that Works”, in order to effectively summarize, students must delete some information, substitute some information and keep some information. This is a perfect example of how sketchnoting can become a student’s best friend. 

Introduce this concept to your students so they can start making their own summaries of materials using sketchnotes. Prepare a short article focussing on one particular subject. Then, ask your students to create a visual note that will describe what they’ve learned. 

The sketchnoting process
Provide a text geared at reading comprehension.
Ask your students to delete things that are not related to the text. 
Substitute some things but keep the most important data and facts. 
Create a short summary using a sketchnote. 
How to draw notes? Getting started with digital sketchnoting is easy.
Regular sketchnotes can be easily transformed into digital sketchnoting. If you want to have access to all your resources in one place in the Cloud, this scenario is for you! Explain Everything Whiteboard allows you to store all your materials conveniently and use them no matter where you are.

Let’s go through the basics of digital sketchnoting. Follow the steps below to create your very first digital sketch note. Yes, there is an app for that!`,
      },
      {
        title:
          "Did you hear? Explain Everything Advanced is now available on the app stores.",
        image:
          "https://explaineverything.com/wp-content/uploads/2024/05/ee_advanced_cover-1536x768.png",
        discrible:
          "It’s been almost two years since Explain Everything joined forces with Promethean – a leading global education technology company. And now, Explain Everything is even better with exciting new features and the Explain Everything Advanced plan.",
        content: `We also offer customized Explain Everything Advanced plans for institutions, such as schools and districts, which are perfect for groups of educators who need access to management tools, LMS integrations, and expanded collaborative functionality.

I’m on a Solo Teacher Plan – what changes? 
If you are currently using Explain Everything on the Solo Teacher plan ($34.99/year), you can renew your subscription and continue using the app at the same price.
Should you choose to cancel your subscription after June 10, 2024, you will only be able to start a new subscription for Explain Everything Advanced.

When canceling your Solo Teacher plan, the app will  present you with an option to purchase the new Explain Everything Advanced plan. So, if you are happy with the Solo Teacher plan, simply renew your subscription.

I’m on an Individual / Pro plan – has that plan changed?
No, if you are a user of an Individual plan or a Pro plan, your subscription price remains the same. But, you will receive an added bonus – the app will now feature the  Promethean’s Polling, Timer, and Spinner. `,
      },
      {
        title: "How to Make an Ecomap with an Online Whiteboard",
        image:
          "https://explaineverything.com/wp-content/uploads/2024/05/aplx_ee_advanced_uk_secondary_0424v1.png",
        discrible:
          "An ecomap is a great tool that allows a teacher to visualize the people who are important to their pupils. Unlike genograms, ecomaps are a visualization of a child’s or young person’s personal network. They can consist of all kinds of personal connections, not just family. This includes friends, neighbors, or even the school staff.",
        content: `What is an Ecomap?
An ecomap is a great tool that allows a teacher to visualize the people who are important to their pupils. Unlike genograms, ecomaps are a visualization of a child’s or young person’s personal network. They can consist of all kinds of personal connections, not just family. This includes friends, neighbors, or even the school staff.

In practice, an ecomap resembles a conventional mind map or spider diagram. At the center of the ecomap is the name of the pupil making the map. You then instruct them to write down all the people and places that mean the most to them. In order to keep this activity structured and productive, you can pre-design an ecomap and then share the design with the classroom. It might also be helpful to do one yourself and display it to the class as an example.

Developing an ecomap with your students gives you a unique window into the context of their lives and is a great way for other students to find common interests. Ecomaps are especially useful for new students in class or at the beginning of the year as an icebreaker.

Benefits of an Ecomap
There are a number of benefits to making ecomaps in your classroom apart from what has been mentioned above. Ecomaps can:

Be a great way to understand and connect with traditionally more shy students. This is especially true for large classrooms where it can be hard for pupils to find a space to fully express themselves.
Be very engaging and are simple to make. If you are using a digital whiteboard or your students are using digital technology, like a tablet, to learn and contribute in class, ecomaps are a fantastic activity to fill any time between lessons.
Be the ideal student-centered learning activity as it puts the pupil doing the ecomap in charge of the information they share (they are always the center of the ecomap), whilst giving them the opportunity to express their interests.
Be a great activity to give students a break from intensive learning and allow them to focus on a more creative task that is still structured. Given the importance of social-emotional activities in teaching today, ecomaps can be a great introduction to SEL for older students.`,
      },
      {
        title: "Explain Everything Integrations and Apps in a nutshell",
        image:
          "https://explaineverything.com/wp-content/uploads/2024/06/explain-everything-integrations-and-apps-in-a-nutshell-1-1536x768.png",
        discrible:
          "Today, let’s go through the popular Explain Everything integrations and LMS (Learning Management Systems) that support our product!",
        content: `Google Classroom 
Google Classroom is renowned as one of the most popular Learning Management Systems (LMS) in the edtech sphere. At Explain Everything, our goal is to simplify the teaching and learning process for every teacher. To achieve this, we have developed dedicated integration with Google Classroom.

With the Explain Everything Whiteboard, creating assignments becomes effortless. Our magic button allows you to instantly share assignments directly to Google Classroom, saving a considerable amount of time and simplifying the entire process.

Canvas 
Canvas is a web-based learning management system, or LMS. It is used by learning institutions, educators, and students to access and manage online course learning materials.

Canvas includes a variety of customizable course creation and management tools, course and user analytics and statistics, and internal communication tools.

See how you can incorporate both, Explain Everything and Canvas.

Moodle
Moodle is used for blended learning, distance education, flipped classroom and other online learning projects in schools, universities, workplaces and other sectors.

See how you can incorporate both, Explain Everything and Moodle.

Schoology
Schoology is a web-based learning management system (LMS) that allows teachers to create and assign both traditional and creative tasks. Some of the most often used features include assignment creation and submission, the grade book, links to outside content, PDF markup, student progress reports, and messaging.

See how you can incorporate both, Explain Everything and Schoology.`,
      },
      {
        title: "Teaching Reading and Writing with a Smartboard",
        image:
          "https://explaineverything.com/wp-content/uploads/2023/04/image-15.png",
        discrible:
          "At the core of a child’s academic development is their literacy level. Forming a solid baseline knowledge of reading and writing is one of the most important things a teacher can do.",
        content: `At the core of a child’s academic development is their literacy level. Forming a solid baseline knowledge of reading and writing is one of the most important things a teacher can do. However, it’s possible to forget how challenging learning to read and write for the first time can be. After all, teachers have spent a large part of their training and careers internalizing much of the process.

Unlike mathematics or the sciences, breaking reading and writing down into clear and logical steps is not always easy. Many educators fall into the trap of assigning reading and writing for homework too early. Competent literacy skills are built in the classroom and there are a number of strategies educators can use to teach these essential skills.

5 Strategies for Teaching Reading and Writing with a Smartboard/Digital Whiteboard
With the introduction of digital whiteboards, making learning to read and write appealing and engaging has never been easier. Below, we’ve suggested 5 strategies that will help to enhance and direct your reading and writing lessons with a smartboard. However, many of the ideas discussed below can be applied to classrooms without them.

1. Think about Phonemes and Phonics
Understanding how to read and write an alphabetic language via the relationships between spoken sounds of the language, or phonemes, is one of the basic building blocks of literacy teaching. Talking always comes before reading, so phonemic awareness in the classroom is essential. With the aid of a digital whiteboard, you can easily create interactive games that will heighten a student’s phonemic understanding and teach critical phonic skills.

With Explain Everything’s clipart library, you could create a set of image pairs to help students identify rhyming words, gather a set of images that need to be organized into beginning or end sounds, or create recordings of certain words and get your classroom to write and spell the word they hear. Interactive teaching technology can help children to grasp spelling, prefixes, and suffixes more quickly and efficiently.  

2. Get Creative
Creative writing is one of the best ways to engage students in the practice of writing. Not only does it give them the chance to express themselves and connect the experience of writing with their own personal interests, but it also helps them to order and structure their thinking and critical faculties. Guided by a teaching professional, creative writing offers students the opportunity to expand their vocabulary and practice spelling, experiment with new sentence structures, and apply grammar correctly.

With a digital whiteboard, one strategy for guided and effective creative writing is to display a collection of images, words, and grammatical symbols, and task the classroom with creating a short story with these elements. Equally, short creative writing sessions where students write a response to an image, video, or animation, are an ideal way to fill spaces between lessons and practice vital literacy skills.

Remember, reading and writing complement each other, so, if possible, give students the chance to write about a text that they’re currently studying.

3. Active Vocabulary Learning
Giving students the chance to actively build their vocabulary, as opposed to passively learning new words, will allow them to progress their reading and writing skills more quickly. There are a number of different strategies that can make the process of learning a new word or phrase more active and engaging. In today’s digital world, there’s no need to break out a dictionary and transcribe definitions.

A staple of teaching vocabulary today is collaborative writing.In groups or as a classroom, you can write something together, allowing you to model the writing process towards using new words. You can equally use your smartboard as a kind of mural or graffiti wall. You can post words in one part and ask the class to contribute synonyms on the other side.

For a truly interactive vocabulary lesson, you could even get your students to record short videos about a new word they’ve found and then present them to your class as a small movie on your smartboard.

4. Fluent Reading
Many teachers aim to make their students “fluent” readers, who read in the same way they speak and speak in the same way they read. This also means that a pupil can read a text accurately, quickly, and with expression. The only sure way to do this is to give your students multiple opportunities to read and be exposed to what fluency sounds like.

Traditionally, this might involve a teacher reading to their students, or having the classroom take turns in reading short passages. As good as this is, digital whiteboard technology can help make this more engaging. For example, an activity could involve visualizing where to put emphasis in sentences, taking audio recordings of students reading a passage and correcting it, or providing the classroom with a few sentences that have no punctuation and letting them decide what punctuation to use to create emphasis.

5. Visualizing Reading Comprehension
Comprehension and the task of processing a text can be a difficult thing to learn. Re-reading, reflecting, and marking up a text is not something that comes naturally to most students; it often requires a lot of practice. A good way to teach comprehension is to physically draw diagrams (like Venn diagrams of plot points or character traits) and annotate a chosen document with concise notes.

This can be done easily with Explain Everything’s collaborative whiteboard space, whether it’s on the student’s own device or collectively on the smartboard in the classroom. You can add colors and create diagrams with just a few clicks.`,
      },
      {
        title: "Making a 5E Science Lesson Plan With Explain Everything",
        image:
          "https://explaineverything.com/wp-content/uploads/2024/02/making-a-5e-science-lesson-plan-with-explain-everything-1-1536x768.png",
        discrible:
          "The benefits of using the 5E lesson plan to structure classes are well-known to science teachers everywhere.",
        content: `What is the 5E Lesson Plan?
The 5E lesson plan is based on a 5-stage instructional model. The five “Es” of the model are: Engage, Explore, Explain, Elaborate, and Evaluate. By design, a 5E lesson plan will avoid front-loading students, instead allowing them to engage with and discover concepts for themselves. 

The model was originally developed by the Biological Sciences Curriculum Study (BSCS) in 1987 and was first proposed by Dr. Rodger Bybee. The 5E instructional model was designed as a way to structure science lessons and enhance students’ understanding of scientific ideas and concepts. Despite being made for science education, it has become a popular methodology across many other subjects.

Exploring the 5E Science Lesson Plan
The aim of the 5E model is to give students a means of connecting abstract scientific concepts to their own experiences, something especially useful when teaching the more technical aspects of the sciences. Also seen as an approach to inquiry science, the 5E model tries to instill a sense of curiosity, exploration, and a need for evidence-based explanations for justification.

Below, we’ve laid out a 5E science lesson plan to give you a complete understanding of the model and to provide you with a template for teaching science modules with this methodology today. 

1. Engage
The first phase of the 5E science lesson plan is Engagement. This initial stage is designed to pique the curiosity of the students, usually by introducing a question or concept that the students cannot solve (yet). You could even conduct a simple experiment to demonstrate the scientific concepts that they will be learning about. If possible, try to build on previous concepts learned in other lessons to create meaning in the pupils’ minds.

During the Engagement phase, it’s important to make your teaching as interactive as possible. With the Explain Everything collaborative whiteboard, it’s easy to gather different media forms in one place, so you can switch seamlessly between images, videos, and animations. You can also upload photos of worksheets and annotate everything as you go. 

You can even extend the Engagement phase by setting it as homework for the class to follow. 

2. Explore
The second phase, Explore, uses inquiry activities to allow students to actively observe what they’re studying, think critically about the material, and connect concepts from the Engage stage. You should encourage the students to consider what they already know and what they are trying to find out/what is the problem they are trying to solve.  

This could take the form of a classification exercise of different natural objects, some form of lab investigation as a group, or even interactive 3D models that each of the students has to try to label. Explain Everything’s 3D Model adapted software makes it easy to bring large concepts to life, like the atom, the relative size of mammals and dinosaurs, or even how typical rollercoasters are powered by gravity alone. 

3. Explain
The third phase of the lesson plan, Explain, is where the teacher explains the concepts from the previous stage and guides the students toward defining and understanding their findings. In a science class, this part of the lesson plan could begin with brief demonstrations of what the students have discovered in the Explore stage, followed by prompts or additional questions from the teacher. The additional questions and prompts can then be used to segue into a deeper discussion about the key concepts being taught. 

Multimedia presentations and dynamic slideshows on a collaborative whiteboard can help to engage and reinforce your explanation at this stage.

4. Elaborate
In the Elaborate phase, students are invited to apply what they’ve understood from the previous phases, by solving a problem in a new context. This can be done in class or assigned as homework, in groups, or individually. You can also use this stage to extend your class’s understanding of the topic by connecting it to the real world or their own personal experiences. 

This can take the form of collaborative project-based activities, where students must research examples of what they’ve learned, or an interactive quiz about the recently discovered concepts. With the capacity to broadcast to other devices, store, and edit digital assignments, Explain Everything’s collaborative whiteboard makes the 4th stage of the 5E lesson plan simple and efficient.  

5. Evaluate
In the final stage, students demonstrate their mastery of the scientific concepts from the previous stages. It is also where the educator must evaluate their students’ level of understanding and if the lesson objectives have been met. This is also the perfect time to give students feedback about their engagement and learning.

This final stage can take whatever form the teacher sees fit for their class. For example, you don’t have to limit the evaluation to a quiz or formal test. In fact, multiple different types of evaluations might be more beneficial in this context. The Explain Everything collaborative whiteboard is a great way for students to be creative and display what they’ve learned in a variety of formats, including video and audio presentations. By giving them the freedom to apply their knowledge to something that they can relate to, abstract scientific concepts become relatable and memorable.

You may already be using some of the aforementioned concepts in your science lessons, so we encourage you to reflect on the above and think about how you can gently integrate the 5E model into your current practice. In fact, there’s no need to build in all the steps at once, you can start small and spread the phases over many lessons if necessary.`,
      },
    ],
  });
});

const blogsEn = [
  {
    title: "A teacher’s guide to different types of assessments",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/07/casualfilms_k12_9646_1121.jpg",
    discrible:
      "Assessments are an essential part of education. While many people have a misconception that an assessment is always the final goal, different types of assessments can – and should – take place throughout the academic year. ",
    content: `Exploring different assessment types
Assessments are an essential part of education. While many people have a misconception that an assessment is always the final goal, different types of assessments can – and should – take place throughout the academic year. 

The right type of assessment helps teachers understand what their students have learned and the areas they need to improve on. They also enable students to better recognize their strengths and weaknesses, too.

Three of the most common assessment types are diagnostic, formative, and summative.

Diagnostic assessment
Also known as a pre-test, a diagnostic assessment establishes what knowledge a student possesses before formal learning begins. Teachers can then use this information to alter their lessons accordingly and tailor the amount of attention each pupil receives. 

Because a diagnostic assessment aims to understand students’ existing knowledge, strengths, and weaknesses, it will not count toward grades. The goal is to improve teaching by recognizing areas that need improvement; it’s never to judge students for what they do not know.`,
  },
  {
    title: "Examples of SMART goals and objectives or teachers and students",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/06/gettyimages-1291370118-1-1536x1024.jpg",
    discrible:
      "SMART goals in education According to leading theorists Locke and Latham, students who set specific goals perform better at school than those who do not. Teachers can enhance their pupils’",
    content: `SMART goals in education
According to leading theorists Locke and Latham, students who set specific goals perform better at school than those who do not. Teachers can enhance their pupils’ performances by incorporating goal-setting into the classroom. But that’s not the only way goals can help in education. Goal setting is also important in career development, so teachers can—and should—set goals for themselves.

The SMART methodology can help teachers and students to construct robust, specific goals. Teachers can use SMART objectives and goals to improve lesson structures, support their pupils’ education, and boost their career progression. 

What are SMART goals?
SMART goals are goals with a structured framework that make them more realistic to achieve. People can use SMART goals for various purposes, including education, career growth, and personal development.

SMART is an acronym which stands for the five things a goal needs to be: 

Specific
Measurable
Attainable
Relevant
Time-bound
S – Specific
SMART goals should clearly define the final achievement, who is responsible for it, and what steps a person needs to take to achieve it.

For example, a specific SMART goal for a pupil could be: “I will score over 80% on the end-of-term spelling test by making flashcards for any previous mistakes and revising for one hour every week.” The student is less likely to achieve a generic goal like “I will improve my spelling” as it’s unclear how they can get there.

M – Measurable
By quantifying your goals, you can objectively measure your achievement. It’s also easier to track your progress. 

You should create a measurement framework to make a goal measurable. So, if a teacher wants to improve classroom satisfaction, they must set a benchmark. With Explain Everything digital whiteboards, teachers can invite their students to draw on the whiteboards and write a number based on how much they enjoyed or learned from a certain activity. Teachers can then take screenshots and measure the average scores over time.

A  – Attainable
Goals need to be achievable – but not too easy.

You should also consider what you can control. It’s not necessarily achievable for a child to be “the best at basketball in school,” as they cannot control the progress of their peers. However, they can set themselves goals of how often they’ll practice and how much they’ll improve their shot accuracy.

R  – Relevant
You need to understand why you’re setting a goal. 

If a teacher wants to be a subject head, they might set SMART goals around furthering their knowledge and improving professional skills. General SMART goals relating to improving efficiency are probably less relevant, unless this was the reason they were being held back from promotion. 

Some SMART methodologies use ‘Realistic’ as the ‘R’ instead. For a goal to be realistic, you need to be able to achieve it within the timeframe and with the resources available. 

T  – Time-bound
It should be clear when the goal needs to be completed. 

To ensure SMART goals are effectively implemented in education, consider using time frames such as school terms, semesters, or years.`,
  },
  {
    title: "How to use affinity diagrams to empower students",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/06/gettyimages-1021823026-1-1536x864.jpg",
    discrible:
      "While affinity diagrams are perhaps most used by user experience (UX) professionals, teachers can adapt the process to suit educational settings. Educators can use it as a teaching tool to encourage free thinking; it even has its place as a revision method.",
    content: `Affinity mapping in education
Affinity mapping is a way of organizing thoughts from brainstorming. 

While affinity diagrams are perhaps most used by user experience (UX) professionals, teachers can adapt the process to suit educational settings. Educators can use it as a teaching tool to encourage free thinking; it even has its place as a revision method. Because affinity mapping is an extension of brainstorming, it gives pupils the freedom to explore their thoughts. This can be an empowering learning experience. 

Affinity mapping has traditionally been completed with sticky notes on walls or whiteboards. But with today’s technology, such as Explain Everything’s online whiteboard, you can digitize the process – introducing new opportunities for collaboration and making it easier to save findings. 

What is an affinity diagram?
An affinity diagram, also known as an affinity chart or affinity map, is a visual method of organizing thoughts from a brainstorming session. 

It works by the participants organizing their brainstorming findings (usually on sticky notes or a digitalized equivalent) into groups. They then give a name to the different categories. For example, a group of students may brainstorm the topic “What makes a good story?”. They may come up with varied points and could then group these into categories like “Characters”, “Plot”, and “Writing style”. From this view, they can then understand the themes they’ve identified through brainstorming and specific callouts.

Affinity diagrams are also known as the KJ Technique, named after its creator, Jiro Kawakita. With the KJ Method, it’s crucial to vote for the most important groups and rank them accordingly. This can be used when a group agrees on an idea that they want to focus on or consider the most important. However, it will not always have its place in education. For example, suppose students are using affinity diagrams as a way of visualizing their knowledge of a subject rather than suggestions for things they want to change. In that case, it’s not appropriate to rank the groups. If ranking isn’t needed, you may want to consider affinity diagrams complete after the grouping process.`,
  },
  {
    title: "How to draw notes? Sketchnoting using a whiteboard",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/03/sketchnoting-cover-1536x768.png",
    discrible:
      "How to draw notes online? Sketchnoting, or visual notetaking, is a textbook practical application of what’s called dual coding theory, thanks to how it combines both words and images to convey a message. Sketchnoting is based on low-complexity visual outputs, typically a combination of dots, lines, circles, squares and triangles. ",
    content: `How to draw notes, and what is sketchnoting?
Rohde defines sketchnotes as “visual maps combining written words and images while providing structure through variations of frames, dividers, bullets, icons, and connectors such as lines and arrows”. So essentially, these types of notes are visual maps which combine written words and images. 

Adding sketches to your daily teaching and learning can help you improve your retention of the materials you work with and your memory more broadly. Sketchnoting can turn traditional notes into meaningful interpretations of discussions, lectures and knowledge gained. 

Research and theory on summarizing how to draw notes
According to the book “Classroom Instruction that Works”, in order to effectively summarize, students must delete some information, substitute some information and keep some information. This is a perfect example of how sketchnoting can become a student’s best friend. 

Introduce this concept to your students so they can start making their own summaries of materials using sketchnotes. Prepare a short article focussing on one particular subject. Then, ask your students to create a visual note that will describe what they’ve learned. 

The sketchnoting process
Provide a text geared at reading comprehension.
Ask your students to delete things that are not related to the text. 
Substitute some things but keep the most important data and facts. 
Create a short summary using a sketchnote. 
How to draw notes? Getting started with digital sketchnoting is easy.
Regular sketchnotes can be easily transformed into digital sketchnoting. If you want to have access to all your resources in one place in the Cloud, this scenario is for you! Explain Everything Whiteboard allows you to store all your materials conveniently and use them no matter where you are.

Let’s go through the basics of digital sketchnoting. Follow the steps below to create your very first digital sketch note. Yes, there is an app for that!`,
  },
  {
    title:
      "Did you hear? Explain Everything Advanced is now available on the app stores.",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/05/ee_advanced_cover-1536x768.png",
    discrible:
      "It’s been almost two years since Explain Everything joined forces with Promethean – a leading global education technology company. And now, Explain Everything is even better with exciting new features and the Explain Everything Advanced plan.",
    content: `We also offer customized Explain Everything Advanced plans for institutions, such as schools and districts, which are perfect for groups of educators who need access to management tools, LMS integrations, and expanded collaborative functionality.

I’m on a Solo Teacher Plan – what changes? 
If you are currently using Explain Everything on the Solo Teacher plan ($34.99/year), you can renew your subscription and continue using the app at the same price.
Should you choose to cancel your subscription after June 10, 2024, you will only be able to start a new subscription for Explain Everything Advanced.

When canceling your Solo Teacher plan, the app will  present you with an option to purchase the new Explain Everything Advanced plan. So, if you are happy with the Solo Teacher plan, simply renew your subscription.

I’m on an Individual / Pro plan – has that plan changed?
No, if you are a user of an Individual plan or a Pro plan, your subscription price remains the same. But, you will receive an added bonus – the app will now feature the  Promethean’s Polling, Timer, and Spinner. `,
  },
  {
    title: "How to Make an Ecomap with an Online Whiteboard",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/05/aplx_ee_advanced_uk_secondary_0424v1.png",
    discrible:
      "An ecomap is a great tool that allows a teacher to visualize the people who are important to their pupils. Unlike genograms, ecomaps are a visualization of a child’s or young person’s personal network. They can consist of all kinds of personal connections, not just family. This includes friends, neighbors, or even the school staff.",
    content: `What is an Ecomap?
An ecomap is a great tool that allows a teacher to visualize the people who are important to their pupils. Unlike genograms, ecomaps are a visualization of a child’s or young person’s personal network. They can consist of all kinds of personal connections, not just family. This includes friends, neighbors, or even the school staff.

In practice, an ecomap resembles a conventional mind map or spider diagram. At the center of the ecomap is the name of the pupil making the map. You then instruct them to write down all the people and places that mean the most to them. In order to keep this activity structured and productive, you can pre-design an ecomap and then share the design with the classroom. It might also be helpful to do one yourself and display it to the class as an example.

Developing an ecomap with your students gives you a unique window into the context of their lives and is a great way for other students to find common interests. Ecomaps are especially useful for new students in class or at the beginning of the year as an icebreaker.

Benefits of an Ecomap
There are a number of benefits to making ecomaps in your classroom apart from what has been mentioned above. Ecomaps can:

Be a great way to understand and connect with traditionally more shy students. This is especially true for large classrooms where it can be hard for pupils to find a space to fully express themselves.
Be very engaging and are simple to make. If you are using a digital whiteboard or your students are using digital technology, like a tablet, to learn and contribute in class, ecomaps are a fantastic activity to fill any time between lessons.
Be the ideal student-centered learning activity as it puts the pupil doing the ecomap in charge of the information they share (they are always the center of the ecomap), whilst giving them the opportunity to express their interests.
Be a great activity to give students a break from intensive learning and allow them to focus on a more creative task that is still structured. Given the importance of social-emotional activities in teaching today, ecomaps can be a great introduction to SEL for older students.`,
  },
  {
    title: "Explain Everything Integrations and Apps in a nutshell",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/06/explain-everything-integrations-and-apps-in-a-nutshell-1-1536x768.png",
    discrible:
      "Today, let’s go through the popular Explain Everything integrations and LMS (Learning Management Systems) that support our product!",
    content: `Google Classroom 
Google Classroom is renowned as one of the most popular Learning Management Systems (LMS) in the edtech sphere. At Explain Everything, our goal is to simplify the teaching and learning process for every teacher. To achieve this, we have developed dedicated integration with Google Classroom.

With the Explain Everything Whiteboard, creating assignments becomes effortless. Our magic button allows you to instantly share assignments directly to Google Classroom, saving a considerable amount of time and simplifying the entire process.

Canvas 
Canvas is a web-based learning management system, or LMS. It is used by learning institutions, educators, and students to access and manage online course learning materials.

Canvas includes a variety of customizable course creation and management tools, course and user analytics and statistics, and internal communication tools.

See how you can incorporate both, Explain Everything and Canvas.

Moodle
Moodle is used for blended learning, distance education, flipped classroom and other online learning projects in schools, universities, workplaces and other sectors.

See how you can incorporate both, Explain Everything and Moodle.

Schoology
Schoology is a web-based learning management system (LMS) that allows teachers to create and assign both traditional and creative tasks. Some of the most often used features include assignment creation and submission, the grade book, links to outside content, PDF markup, student progress reports, and messaging.

See how you can incorporate both, Explain Everything and Schoology.`,
  },
  {
    title: "Teaching Reading and Writing with a Smartboard",
    image:
      "https://explaineverything.com/wp-content/uploads/2023/04/image-15.png",
    discrible:
      "At the core of a child’s academic development is their literacy level. Forming a solid baseline knowledge of reading and writing is one of the most important things a teacher can do.",
    content: `At the core of a child’s academic development is their literacy level. Forming a solid baseline knowledge of reading and writing is one of the most important things a teacher can do. However, it’s possible to forget how challenging learning to read and write for the first time can be. After all, teachers have spent a large part of their training and careers internalizing much of the process.

Unlike mathematics or the sciences, breaking reading and writing down into clear and logical steps is not always easy. Many educators fall into the trap of assigning reading and writing for homework too early. Competent literacy skills are built in the classroom and there are a number of strategies educators can use to teach these essential skills.

5 Strategies for Teaching Reading and Writing with a Smartboard/Digital Whiteboard
With the introduction of digital whiteboards, making learning to read and write appealing and engaging has never been easier. Below, we’ve suggested 5 strategies that will help to enhance and direct your reading and writing lessons with a smartboard. However, many of the ideas discussed below can be applied to classrooms without them.

1. Think about Phonemes and Phonics
Understanding how to read and write an alphabetic language via the relationships between spoken sounds of the language, or phonemes, is one of the basic building blocks of literacy teaching. Talking always comes before reading, so phonemic awareness in the classroom is essential. With the aid of a digital whiteboard, you can easily create interactive games that will heighten a student’s phonemic understanding and teach critical phonic skills.

With Explain Everything’s clipart library, you could create a set of image pairs to help students identify rhyming words, gather a set of images that need to be organized into beginning or end sounds, or create recordings of certain words and get your classroom to write and spell the word they hear. Interactive teaching technology can help children to grasp spelling, prefixes, and suffixes more quickly and efficiently.  

2. Get Creative
Creative writing is one of the best ways to engage students in the practice of writing. Not only does it give them the chance to express themselves and connect the experience of writing with their own personal interests, but it also helps them to order and structure their thinking and critical faculties. Guided by a teaching professional, creative writing offers students the opportunity to expand their vocabulary and practice spelling, experiment with new sentence structures, and apply grammar correctly.

With a digital whiteboard, one strategy for guided and effective creative writing is to display a collection of images, words, and grammatical symbols, and task the classroom with creating a short story with these elements. Equally, short creative writing sessions where students write a response to an image, video, or animation, are an ideal way to fill spaces between lessons and practice vital literacy skills.

Remember, reading and writing complement each other, so, if possible, give students the chance to write about a text that they’re currently studying.

3. Active Vocabulary Learning
Giving students the chance to actively build their vocabulary, as opposed to passively learning new words, will allow them to progress their reading and writing skills more quickly. There are a number of different strategies that can make the process of learning a new word or phrase more active and engaging. In today’s digital world, there’s no need to break out a dictionary and transcribe definitions.

A staple of teaching vocabulary today is collaborative writing.In groups or as a classroom, you can write something together, allowing you to model the writing process towards using new words. You can equally use your smartboard as a kind of mural or graffiti wall. You can post words in one part and ask the class to contribute synonyms on the other side.

For a truly interactive vocabulary lesson, you could even get your students to record short videos about a new word they’ve found and then present them to your class as a small movie on your smartboard.

4. Fluent Reading
Many teachers aim to make their students “fluent” readers, who read in the same way they speak and speak in the same way they read. This also means that a pupil can read a text accurately, quickly, and with expression. The only sure way to do this is to give your students multiple opportunities to read and be exposed to what fluency sounds like.

Traditionally, this might involve a teacher reading to their students, or having the classroom take turns in reading short passages. As good as this is, digital whiteboard technology can help make this more engaging. For example, an activity could involve visualizing where to put emphasis in sentences, taking audio recordings of students reading a passage and correcting it, or providing the classroom with a few sentences that have no punctuation and letting them decide what punctuation to use to create emphasis.

5. Visualizing Reading Comprehension
Comprehension and the task of processing a text can be a difficult thing to learn. Re-reading, reflecting, and marking up a text is not something that comes naturally to most students; it often requires a lot of practice. A good way to teach comprehension is to physically draw diagrams (like Venn diagrams of plot points or character traits) and annotate a chosen document with concise notes.

This can be done easily with Explain Everything’s collaborative whiteboard space, whether it’s on the student’s own device or collectively on the smartboard in the classroom. You can add colors and create diagrams with just a few clicks.`,
  },
  {
    title: "Making a 5E Science Lesson Plan With Explain Everything",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/02/making-a-5e-science-lesson-plan-with-explain-everything-1-1536x768.png",
    discrible:
      "The benefits of using the 5E lesson plan to structure classes are well-known to science teachers everywhere.",
    content: `What is the 5E Lesson Plan?
The 5E lesson plan is based on a 5-stage instructional model. The five “Es” of the model are: Engage, Explore, Explain, Elaborate, and Evaluate. By design, a 5E lesson plan will avoid front-loading students, instead allowing them to engage with and discover concepts for themselves. 

The model was originally developed by the Biological Sciences Curriculum Study (BSCS) in 1987 and was first proposed by Dr. Rodger Bybee. The 5E instructional model was designed as a way to structure science lessons and enhance students’ understanding of scientific ideas and concepts. Despite being made for science education, it has become a popular methodology across many other subjects.

Exploring the 5E Science Lesson Plan
The aim of the 5E model is to give students a means of connecting abstract scientific concepts to their own experiences, something especially useful when teaching the more technical aspects of the sciences. Also seen as an approach to inquiry science, the 5E model tries to instill a sense of curiosity, exploration, and a need for evidence-based explanations for justification.

Below, we’ve laid out a 5E science lesson plan to give you a complete understanding of the model and to provide you with a template for teaching science modules with this methodology today. 

1. Engage
The first phase of the 5E science lesson plan is Engagement. This initial stage is designed to pique the curiosity of the students, usually by introducing a question or concept that the students cannot solve (yet). You could even conduct a simple experiment to demonstrate the scientific concepts that they will be learning about. If possible, try to build on previous concepts learned in other lessons to create meaning in the pupils’ minds.

During the Engagement phase, it’s important to make your teaching as interactive as possible. With the Explain Everything collaborative whiteboard, it’s easy to gather different media forms in one place, so you can switch seamlessly between images, videos, and animations. You can also upload photos of worksheets and annotate everything as you go. 

You can even extend the Engagement phase by setting it as homework for the class to follow. 

2. Explore
The second phase, Explore, uses inquiry activities to allow students to actively observe what they’re studying, think critically about the material, and connect concepts from the Engage stage. You should encourage the students to consider what they already know and what they are trying to find out/what is the problem they are trying to solve.  

This could take the form of a classification exercise of different natural objects, some form of lab investigation as a group, or even interactive 3D models that each of the students has to try to label. Explain Everything’s 3D Model adapted software makes it easy to bring large concepts to life, like the atom, the relative size of mammals and dinosaurs, or even how typical rollercoasters are powered by gravity alone. 

3. Explain
The third phase of the lesson plan, Explain, is where the teacher explains the concepts from the previous stage and guides the students toward defining and understanding their findings. In a science class, this part of the lesson plan could begin with brief demonstrations of what the students have discovered in the Explore stage, followed by prompts or additional questions from the teacher. The additional questions and prompts can then be used to segue into a deeper discussion about the key concepts being taught. 

Multimedia presentations and dynamic slideshows on a collaborative whiteboard can help to engage and reinforce your explanation at this stage.

4. Elaborate
In the Elaborate phase, students are invited to apply what they’ve understood from the previous phases, by solving a problem in a new context. This can be done in class or assigned as homework, in groups, or individually. You can also use this stage to extend your class’s understanding of the topic by connecting it to the real world or their own personal experiences. 

This can take the form of collaborative project-based activities, where students must research examples of what they’ve learned, or an interactive quiz about the recently discovered concepts. With the capacity to broadcast to other devices, store, and edit digital assignments, Explain Everything’s collaborative whiteboard makes the 4th stage of the 5E lesson plan simple and efficient.  

5. Evaluate
In the final stage, students demonstrate their mastery of the scientific concepts from the previous stages. It is also where the educator must evaluate their students’ level of understanding and if the lesson objectives have been met. This is also the perfect time to give students feedback about their engagement and learning.

This final stage can take whatever form the teacher sees fit for their class. For example, you don’t have to limit the evaluation to a quiz or formal test. In fact, multiple different types of evaluations might be more beneficial in this context. The Explain Everything collaborative whiteboard is a great way for students to be creative and display what they’ve learned in a variety of formats, including video and audio presentations. By giving them the freedom to apply their knowledge to something that they can relate to, abstract scientific concepts become relatable and memorable.

You may already be using some of the aforementioned concepts in your science lessons, so we encourage you to reflect on the above and think about how you can gently integrate the 5E model into your current practice. In fact, there’s no need to build in all the steps at once, you can start small and spread the phases over many lessons if necessary.`,
  },
];
const blogsVi = [
  {
    title: "Hướng dẫn dành cho giáo viên về các loại đánh giá khác nhau",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/07/casualfilms_k12_9646_1121.jpg",
    discrible:
      "Đánh giá là một phần thiết yếu của giáo dục. Mặc dù nhiều người có quan niệm sai lầm rằng đánh giá luôn là mục tiêu cuối cùng, nhưng các loại đánh giá khác nhau có thể - và nên - diễn ra suốt năm học.",
    content: `Khám phá các loại đánh giá khác nhau
Đánh giá là một phần thiết yếu của giáo dục. Mặc dù nhiều người có quan niệm sai lầm rằng đánh giá luôn là mục tiêu cuối cùng, nhưng các loại đánh giá khác nhau có thể - và nên - diễn ra suốt năm học.

Loại đánh giá phù hợp giúp giáo viên hiểu được học sinh của mình đã học được những gì và những lĩnh vực mà họ cần cải thiện. Nó cũng giúp học sinh nhận ra rõ hơn điểm mạnh và điểm yếu của mình.

Ba loại đánh giá phổ biến nhất là đánh giá chẩn đoán, đánh giá hình thành và đánh giá tổng kết.

Đánh giá chẩn đoán
Còn được gọi là bài kiểm tra trước, đánh giá chẩn đoán xác định kiến thức mà học sinh có trước khi bắt đầu học chính thức. Giáo viên có thể sử dụng thông tin này để điều chỉnh bài giảng của mình cho phù hợp và điều chỉnh lượng chú ý dành cho từng học sinh.

Vì đánh giá chẩn đoán nhằm mục đích hiểu kiến thức hiện có của học sinh, điểm mạnh và điểm yếu của họ, nên nó sẽ không được tính vào điểm số. Mục tiêu là cải thiện việc giảng dạy bằng cách nhận ra những lĩnh vực cần cải thiện; nó không bao giờ là để đánh giá học sinh về những gì họ chưa biết.`,
  },
  {
    title: "Ví dụ về mục tiêu SMART cho giáo viên và học sinh",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/06/gettyimages-1291370118-1-1536x1024.jpg",
    discrible:
      "Mục tiêu SMART trong giáo dục Theo các nhà lý thuyết hàng đầu Locke và Latham, học sinh đặt ra các mục tiêu cụ thể sẽ có thành tích tốt hơn tại trường học so với những học sinh không đặt mục tiêu.",
    content: `Mục tiêu SMART trong giáo dục
Theo các nhà lý thuyết hàng đầu Locke và Latham, học sinh đặt ra các mục tiêu cụ thể sẽ có thành tích tốt hơn tại trường học so với những học sinh không đặt mục tiêu. Giáo viên có thể cải thiện hiệu suất học tập của học sinh bằng cách tích hợp việc đặt mục tiêu vào lớp học. Nhưng đó không phải là cách duy nhất mục tiêu có thể giúp ích trong giáo dục. Đặt mục tiêu cũng quan trọng trong phát triển nghề nghiệp, vì vậy giáo viên có thể – và nên – đặt ra mục tiêu cho chính mình.

Phương pháp SMART có thể giúp giáo viên và học sinh xây dựng các mục tiêu cụ thể và rõ ràng. Giáo viên có thể sử dụng mục tiêu và mục tiêu SMART để cải thiện cấu trúc bài giảng, hỗ trợ học sinh và thúc đẩy sự tiến bộ trong sự nghiệp của họ.

Mục tiêu SMART là gì?
Mục tiêu SMART là các mục tiêu có khung cấu trúc làm cho chúng trở nên thực tế hơn để đạt được. Mọi người có thể sử dụng mục tiêu SMART cho nhiều mục đích khác nhau, bao gồm giáo dục, phát triển nghề nghiệp và phát triển cá nhân.

SMART là từ viết tắt của năm yếu tố mà một mục tiêu cần có:

Cụ thể
Đo lường được
Có thể đạt được
Liên quan
Có thời hạn
S – Cụ thể
Mục tiêu SMART nên xác định rõ ràng thành tích cuối cùng, ai chịu trách nhiệm và các bước cần thực hiện để đạt được.

Ví dụ, một mục tiêu SMART cụ thể cho học sinh có thể là: “Tôi sẽ đạt trên 80% trong bài kiểm tra chính tả cuối kỳ bằng cách tạo thẻ ghi nhớ cho những lỗi trước đây và ôn tập trong một giờ mỗi tuần.” Học sinh sẽ khó đạt được mục tiêu chung chung như “Tôi sẽ cải thiện chính tả của mình” vì không rõ cách họ có thể đạt được điều đó.

M – Đo lường được
Bằng cách định lượng các mục tiêu của bạn, bạn có thể đo lường thành tích của mình một cách khách quan. Nó cũng dễ dàng hơn để theo dõi tiến độ của bạn.

Bạn nên tạo khung đo lường để làm cho mục tiêu có thể đo lường được. Vì vậy, nếu giáo viên muốn cải thiện sự hài lòng của lớp học, họ phải thiết lập một tiêu chuẩn. Với bảng trắng kỹ thuật số Explain Everything, giáo viên có thể mời học sinh của mình vẽ trên bảng trắng và viết một số dựa trên mức độ họ thích hoặc học được từ một hoạt động nhất định. Sau đó, giáo viên có thể chụp ảnh màn hình và đo điểm trung bình theo thời gian.

A  – Có thể đạt được
Mục tiêu cần phải đạt được – nhưng không quá dễ dàng.

Bạn cũng nên xem xét những gì bạn có thể kiểm soát. Không nhất thiết phải đạt được mục tiêu “trở thành người giỏi nhất trong bóng rổ ở trường,” vì họ không thể kiểm soát tiến bộ của bạn bè. Tuy nhiên, họ có thể đặt ra các mục tiêu về tần suất họ sẽ luyện tập và mức độ cải thiện độ chính xác của cú sút.

R  – Liên quan
Bạn cần hiểu tại sao bạn đặt mục tiêu.

Nếu một giáo viên muốn trở thành trưởng bộ môn, họ có thể đặt mục tiêu SMART liên quan đến việc nâng cao kiến thức và kỹ năng chuyên môn. Các mục tiêu SMART chung chung liên quan đến việc cải thiện hiệu quả có thể ít liên quan hơn, trừ khi đây là lý do họ bị cản trở thăng tiến.

Một số phương pháp SMART sử dụng ‘Thực tế’ thay cho ‘Liên quan’. Để một mục tiêu trở nên thực tế, bạn cần có thể đạt được nó trong khung thời gian và với các nguồn lực có sẵn.

T  – Có thời hạn
Cần phải rõ ràng khi nào mục tiêu cần hoàn thành.

Để đảm bảo các mục tiêu SMART được thực hiện hiệu quả trong giáo dục, hãy cân nhắc sử dụng các khung thời gian như học kỳ, học kỳ hoặc năm học.`,
  },
  {
    title: "Cách sử dụng sơ đồ affinity để trao quyền cho học sinh",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/06/gettyimages-1021823026-1-1536x864.jpg",
    discrible:
      "Mặc dù sơ đồ affinity thường được sử dụng bởi các chuyên gia trải nghiệm người dùng (UX), giáo viên có thể điều chỉnh quy trình này cho phù hợp với môi trường giáo dục. Các nhà giáo dục có thể sử dụng nó như một công cụ giảng dạy để khuyến khích tư duy tự do; nó thậm chí có thể được sử dụng như một phương pháp ôn tập.",
    content: `Sơ đồ affinity trong giáo dục
Sơ đồ affinity là một cách tổ chức các suy nghĩ từ quá trình động não.

Mặc dù sơ đồ affinity thường được sử dụng bởi các chuyên gia trải nghiệm người dùng (UX), giáo viên có thể điều chỉnh quy trình này cho phù hợp với môi trường giáo dục. Các nhà giáo dục có thể sử dụng nó như một công cụ giảng dạy để khuyến khích tư duy tự do; nó thậm chí có thể được sử dụng như một phương pháp ôn tập. Bởi vì sơ đồ affinity là một phần mở rộng của động não, nó mang lại cho học sinh sự tự do khám phá ý tưởng của mình. Đây có thể là một trải nghiệm học tập mang lại quyền lực.

Sơ đồ affinity truyền thống thường được hoàn thành bằng các ghi chú dính trên tường hoặc bảng trắng. Nhưng với công nghệ ngày nay, chẳng hạn như bảng trắng trực tuyến của Explain Everything, bạn có thể số hóa quy trình này – mở ra những cơ hội mới cho sự hợp tác và giúp dễ dàng lưu trữ các phát hiện.

Sơ đồ affinity là gì?
Sơ đồ affinity, còn được gọi là biểu đồ affinity hoặc sơ đồ affinity, là một phương pháp trực quan để tổ chức các suy nghĩ từ một phiên động não.

Nó hoạt động bằng cách tổ chức các phát hiện động não (thường là trên các ghi chú dính hoặc tương đương kỹ thuật số) thành các nhóm. Sau đó, họ đặt tên cho các danh mục khác nhau. Ví dụ, một nhóm học sinh có thể động não về chủ đề “Điều gì tạo nên một câu chuyện hay?”. Họ có thể đưa ra các điểm khác nhau và sau đó nhóm chúng thành các danh mục như “Nhân vật”, “Cốt truyện” và “Phong cách viết”. Từ góc nhìn này, họ có thể hiểu được các chủ đề mà họ đã xác định thông qua quá trình động não và các điểm cần chú ý cụ thể.

Sơ đồ affinity cũng được biết đến với tên gọi là Kỹ thuật KJ, đặt theo tên của người sáng tạo, Jiro Kawakita. Với Phương pháp KJ, điều quan trọng là phải bỏ phiếu cho các nhóm quan trọng nhất và xếp hạng chúng tương ứng. Điều này có thể được sử dụng khi một nhóm đồng ý về một ý tưởng mà họ muốn tập trung vào hoặc coi là quan trọng nhất. Tuy nhiên, nó sẽ không luôn có chỗ đứng trong giáo dục. Ví dụ: giả sử học sinh đang sử dụng sơ đồ affinity như một cách để hình dung kiến thức của mình về một chủ đề thay vì gợi ý những điều họ muốn thay đổi. Trong trường hợp đó, việc xếp hạng các nhóm không cần thiết. Nếu không cần xếp hạng, bạn có thể coi sơ đồ affinity hoàn thành sau quá trình nhóm.`,
  },
  {
    title: "Cách vẽ ghi chú? Sketchnoting sử dụng bảng trắng",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/03/sketchnoting-cover-1536x768.png",
    discrible:
      "Làm thế nào để vẽ ghi chú trực tuyến? Sketchnoting, hay ghi chú trực quan, là một ứng dụng thực tế của lý thuyết mã hóa kép, nhờ cách nó kết hợp cả từ và hình ảnh để truyền tải thông điệp.",
    content: `Cách vẽ ghi chú và sketchnoting là gì?
Rohde định nghĩa sketchnotes là “bản đồ trực quan kết hợp các từ viết và hình ảnh trong khi cung cấp cấu trúc thông qua các biến thể của khung, vách ngăn, dấu đầu dòng, biểu tượng và các kết nối như đường thẳng và mũi tên”. Vì vậy, về cơ bản, các loại ghi chú này là các bản đồ trực quan kết hợp từ viết và hình ảnh.

Việc thêm các bản phác thảo vào quá trình giảng dạy và học tập hàng ngày của bạn có thể giúp bạn cải thiện khả năng ghi nhớ tài liệu mà bạn làm việc và trí nhớ của bạn nói chung. Sketchnoting có thể biến các ghi chú truyền thống thành các diễn giải có ý nghĩa của các cuộc thảo luận, bài giảng và kiến thức đã thu được.

Nghiên cứu và lý thuyết về việc tóm tắt cách vẽ ghi chú
Theo cuốn sách “Hướng dẫn giảng dạy trong lớp học hiệu quả”, để tóm tắt hiệu quả, học sinh phải xóa bỏ một số thông tin, thay thế một số thông tin và giữ lại một số thông tin. Đây là một ví dụ hoàn hảo về cách sketchnoting có thể trở thành người bạn tốt nhất của học sinh.

Giới thiệu khái niệm này cho học sinh của bạn để họ có thể bắt đầu tạo ra các bản tóm tắt tài liệu của mình bằng cách sử dụng sketchnotes. Chuẩn bị một bài viết ngắn tập trung vào một chủ đề cụ thể. Sau đó, yêu cầu học sinh của bạn tạo ra một ghi chú trực quan mô tả những gì họ đã học.

Quá trình sketchnoting
Cung cấp một văn bản hướng đến việc đọc hiểu.
Yêu cầu học sinh của bạn xóa những thứ không liên quan đến văn bản.
Thay thế một số thứ nhưng giữ lại các dữ liệu và sự kiện quan trọng nhất.
Tạo một bản tóm tắt ngắn gọn bằng cách sử dụng sketchnote.
Cách vẽ ghi chú? Bắt đầu với sketchnoting kỹ thuật số rất dễ dàng.
Sketchnotes thông thường có thể dễ dàng được chuyển đổi thành sketchnoting kỹ thuật số. Nếu bạn muốn có quyền truy cập vào tất cả các tài liệu của mình ở một nơi trên Đám mây, thì kịch bản này là dành cho bạn! Explain Everything Whiteboard cho phép bạn lưu trữ tất cả các tài liệu của mình một cách tiện lợi và sử dụng chúng bất kể bạn ở đâu.

Hãy cùng tìm hiểu những điều cơ bản của sketchnoting kỹ thuật số. Làm theo các bước dưới đây để tạo bản phác thảo kỹ thuật số đầu tiên của bạn. Vâng, có một ứng dụng cho điều đó!`,
  },
  {
    title:
      "Bạn đã nghe tin chưa? Explain Everything Advanced hiện đã có trên các cửa hàng ứng dụng.",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/05/ee_advanced_cover-1536x768.png",
    discrible:
      "Đã gần hai năm kể từ khi Explain Everything kết hợp với Promethean – một công ty công nghệ giáo dục hàng đầu toàn cầu. Và bây giờ, Explain Everything thậm chí còn tốt hơn với các tính năng mới thú vị và gói Explain Everything Advanced.",
    content: `Chúng tôi cũng cung cấp các gói Explain Everything Advanced tùy chỉnh cho các tổ chức, chẳng hạn như trường học và quận, là lựa chọn hoàn hảo cho các nhóm giáo viên cần quyền truy cập vào các công cụ quản lý, tích hợp LMS và chức năng cộng tác mở rộng.

Tôi đang sử dụng gói Solo Teacher – có gì thay đổi?
Nếu bạn hiện đang sử dụng Explain Everything trên gói Solo Teacher ($34,99/năm), bạn có thể gia hạn đăng ký và tiếp tục sử dụng ứng dụng với cùng mức giá.
Nếu bạn chọn hủy đăng ký sau ngày 10 tháng 6 năm 2024, bạn chỉ có thể bắt đầu đăng ký mới cho Explain Everything Advanced.

Khi hủy gói Solo Teacher, ứng dụng sẽ cung cấp cho bạn tùy chọn mua gói Explain Everything Advanced mới. Vì vậy, nếu bạn hài lòng với gói Solo Teacher, hãy gia hạn đăng ký của mình.

Tôi đang sử dụng gói Cá nhân/Pro – gói đó có thay đổi gì không?
Không, nếu bạn là người dùng gói Cá nhân hoặc Pro, giá đăng ký của bạn vẫn giữ nguyên. Nhưng, bạn sẽ nhận được thêm một phần thưởng – ứng dụng sẽ có các tính năng của Promethean như Khảo sát, Đồng hồ bấm giờ và Quay số.`,
  },
  {
    title: "Cách tạo Ecomap bằng bảng trắng trực tuyến",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/05/aplx_ee_advanced_uk_secondary_0424v1.png",
    discrible:
      "Ecomap là một công cụ tuyệt vời cho phép giáo viên trực quan hóa những người quan trọng với học sinh của họ. Không giống như genogram, ecomap là hình ảnh hóa mạng lưới cá nhân của một đứa trẻ hoặc thanh thiếu niên. Chúng có thể bao gồm tất cả các loại kết nối cá nhân, không chỉ là gia đình.",
    content: `Ecomap là gì?
Ecomap là một công cụ tuyệt vời cho phép giáo viên trực quan hóa những người quan trọng với học sinh của họ. Không giống như genogram, ecomap là hình ảnh hóa mạng lưới cá nhân của một đứa trẻ hoặc thanh thiếu niên. Chúng có thể bao gồm tất cả các loại kết nối cá nhân, không chỉ là gia đình. Điều này bao gồm bạn bè, hàng xóm hoặc thậm chí là nhân viên nhà trường.

Trên thực tế, ecomap giống với sơ đồ tư duy hoặc sơ đồ nhện truyền thống. Tại trung tâm của ecomap là tên của học sinh làm bản đồ. Bạn sau đó hướng dẫn họ viết xuống tất cả những người và nơi có ý nghĩa nhất với họ. Để giữ cho hoạt động này có cấu trúc và hiệu quả, bạn có thể thiết kế trước một ecomap và sau đó chia sẻ thiết kế với lớp học. Có thể hữu ích nếu bạn tự làm một bản và hiển thị cho lớp học làm ví dụ.

Phát triển ecomap với học sinh của bạn mang lại cho bạn một cửa sổ độc đáo vào bối cảnh cuộc sống của họ và là một cách tuyệt vời để các học sinh khác tìm thấy các sở thích chung. Ecomaps đặc biệt hữu ích cho học sinh mới vào lớp hoặc vào đầu năm học như một trò chơi giới thiệu.

Lợi ích của Ecomap
Có một số lợi ích khi tạo ecomaps trong lớp học của bạn ngoài những gì đã được đề cập ở trên. Ecomaps có thể:

Là một cách tuyệt vời để hiểu và kết nối với những học sinh truyền thống ít nói hơn. Điều này đặc biệt đúng đối với các lớp học lớn nơi học sinh có thể gặp khó khăn trong việc tìm một không gian để thể hiện đầy đủ bản thân.
Rất lôi cuốn và dễ làm. Nếu bạn đang sử dụng bảng trắng kỹ thuật số hoặc học sinh của bạn đang sử dụng công nghệ kỹ thuật số, như máy tính bảng, để học và đóng góp trong lớp, ecomaps là một hoạt động tuyệt vời để lấp đầy thời gian giữa các bài học.
Là hoạt động học tập lấy học sinh làm trung tâm vì nó đặt học sinh làm ecomap làm trung tâm của thông tin họ chia sẻ (họ luôn là trung tâm của ecomap), đồng thời mang lại cho họ cơ hội thể hiện sở thích của mình.
Là một hoạt động tuyệt vời để giúp học sinh có một khoảng nghỉ ngơi từ việc học tập căng thẳng và cho phép họ tập trung vào một nhiệm vụ sáng tạo hơn nhưng vẫn có cấu trúc. Với tầm quan trọng của các hoạt động xã hội - tình cảm trong giảng dạy hiện nay, ecomaps có thể là một phần giới thiệu tuyệt vời về SEL cho học sinh lớn tuổi.`,
  },
  {
    title:
      "Explain Everything - Tích hợp và Ứng dụng trong một cái nhìn tổng quát",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/06/explain-everything-integrations-and-apps-in-a-nutshell-1-1536x768.png",
    discrible:
      "Hôm nay, hãy cùng tìm hiểu các tích hợp phổ biến của Explain Everything và các hệ thống quản lý học tập (LMS) hỗ trợ sản phẩm của chúng tôi!",
    content: `Google Classroom
Google Classroom được biết đến như một trong những hệ thống quản lý học tập (LMS) phổ biến nhất trong lĩnh vực công nghệ giáo dục. Tại Explain Everything, mục tiêu của chúng tôi là đơn giản hóa quá trình giảng dạy và học tập cho mọi giáo viên. Để đạt được điều này, chúng tôi đã phát triển tích hợp chuyên dụng với Google Classroom.

Với bảng trắng Explain Everything, việc tạo ra bài tập trở nên dễ dàng. Nút ma thuật của chúng tôi cho phép bạn chia sẻ bài tập trực tiếp đến Google Classroom, tiết kiệm đáng kể thời gian và đơn giản hóa toàn bộ quy trình.

Canvas
Canvas là một hệ thống quản lý học tập (LMS) dựa trên web. Nó được sử dụng bởi các tổ chức học tập, nhà giáo dục và học sinh để truy cập và quản lý các tài liệu học tập trực tuyến.

Canvas bao gồm nhiều công cụ tạo và quản lý khóa học có thể tùy chỉnh, phân tích và thống kê khóa học và người dùng, cùng các công cụ giao tiếp nội bộ.

Hãy xem cách bạn có thể kết hợp cả hai, Explain Everything và Canvas.

Moodle
Moodle được sử dụng cho học tập kết hợp, giáo dục từ xa, lớp học đảo ngược và các dự án học tập trực tuyến khác trong các trường học, trường đại học, nơi làm việc và các lĩnh vực khác.

Hãy xem cách bạn có thể kết hợp cả hai, Explain Everything và Moodle.

Schoology
Schoology là một hệ thống quản lý học tập (LMS) dựa trên web cho phép giáo viên tạo và giao cả các nhiệm vụ truyền thống và sáng tạo. Một số tính năng được sử dụng nhiều nhất bao gồm tạo và nộp bài tập, sổ điểm, liên kết đến nội dung bên ngoài, đánh dấu PDF, báo cáo tiến độ học sinh và tin nhắn.

Hãy xem cách bạn có thể kết hợp cả hai, Explain Everything và Schoology.`,
  },
  {
    title: "Dạy Đọc và Viết với bảng thông minh",
    image:
      "https://explaineverything.com/wp-content/uploads/2023/04/image-15.png",
    discrible:
      "Nền tảng của sự phát triển học thuật của một đứa trẻ là trình độ hiểu biết của chúng. Xây dựng kiến thức cơ bản vững chắc về đọc và viết là một trong những điều quan trọng nhất mà một giáo viên có thể làm.",
    content: `Nền tảng của sự phát triển học thuật của một đứa trẻ là trình độ hiểu biết của chúng. Xây dựng kiến thức cơ bản vững chắc về đọc và viết là một trong những điều quan trọng nhất mà một giáo viên có thể làm. Tuy nhiên, có thể dễ dàng quên rằng việc học đọc và viết lần đầu tiên có thể khó khăn như thế nào. Dù sao đi nữa, giáo viên đã dành phần lớn thời gian đào tạo và sự nghiệp của họ để nắm bắt nhiều quy trình này.

Không giống như toán học hoặc các môn khoa học, việc chia nhỏ quá trình đọc và viết thành các bước rõ ràng và hợp lý không phải lúc nào cũng dễ dàng. Nhiều nhà giáo dục rơi vào bẫy việc giao bài tập đọc và viết về nhà quá sớm. Kỹ năng đọc hiểu giỏi được xây dựng trong lớp học và có một số chiến lược mà các nhà giáo dục có thể sử dụng để dạy những kỹ năng thiết yếu này.

5 Chiến lược Dạy Đọc và Viết với bảng thông minh/Bảng trắng kỹ thuật số
Với sự xuất hiện của bảng trắng kỹ thuật số, việc làm cho việc học đọc và viết trở nên hấp dẫn và thú vị chưa bao giờ dễ dàng hơn. Dưới đây, chúng tôi đã đề xuất 5 chiến lược sẽ giúp nâng cao và định hướng các bài học đọc và viết của bạn với bảng thông minh. Tuy nhiên, nhiều ý tưởng thảo luận dưới đây có thể được áp dụng cho các lớp học không có chúng.

1. Suy nghĩ về âm vị và ngữ âm
Hiểu cách đọc và viết một ngôn ngữ chữ cái thông qua mối quan hệ giữa âm thanh nói của ngôn ngữ, hoặc âm vị, là một trong những nền tảng cơ bản của giảng dạy đọc viết. Nói luôn đến trước khi đọc, vì vậy nhận thức âm vị trong lớp học là điều cần thiết. Với sự trợ giúp của bảng trắng kỹ thuật số, bạn có thể dễ dàng tạo ra các trò chơi tương tác giúp nâng cao nhận thức âm vị của học sinh và dạy các kỹ năng ngữ âm quan trọng.

Với thư viện clipart của Explain Everything, bạn có thể tạo một bộ cặp hình ảnh để giúp học sinh xác định các từ có vần, thu thập một bộ hình ảnh cần được sắp xếp thành các âm thanh đầu hoặc cuối, hoặc tạo các bản ghi âm các từ nhất định và yêu cầu lớp học của bạn viết và đánh vần từ mà họ nghe thấy. Công nghệ giảng dạy tương tác có thể giúp trẻ em nắm vững cách viết, tiền tố và hậu tố nhanh chóng và hiệu quả hơn.

2. Trở nên sáng tạo
Viết sáng tạo là một trong những cách tốt nhất để lôi cuốn học sinh vào việc viết lách. Không chỉ giúp họ có cơ hội thể hiện bản thân và kết nối trải nghiệm viết với sở thích cá nhân của mình, mà nó còn giúp họ sắp xếp và cấu trúc suy nghĩ cũng như khả năng phê phán của mình. Dưới sự hướng dẫn của một chuyên gia giảng dạy, viết sáng tạo mang lại cho học sinh cơ hội mở rộng từ vựng, thực hành đánh vần, thử nghiệm với các cấu trúc câu mới và áp dụng ngữ pháp một cách chính xác.

Với bảng trắng kỹ thuật số, một chiến lược để hướng dẫn và viết sáng tạo hiệu quả là hiển thị một bộ sưu tập hình ảnh, từ và biểu tượng ngữ pháp, và yêu cầu lớp học tạo ra một câu chuyện ngắn với các yếu tố này. Tương tự, các phiên viết sáng tạo ngắn, nơi học sinh viết phản hồi cho một hình ảnh, video hoặc hoạt hình, là cách lý tưởng để lấp đầy các khoảng trống giữa các bài học và thực hành các kỹ năng đọc hiểu quan trọng.

Hãy nhớ rằng, đọc và viết bổ sung cho nhau, vì vậy, nếu có thể, hãy cho học sinh cơ hội viết về một văn bản mà họ đang học.

3. Học Từ vựng một cách Chủ động
Cho học sinh cơ hội xây dựng từ vựng của mình một cách chủ động, thay vì học từ mới một cách thụ động, sẽ cho phép họ tiến bộ kỹ năng đọc và viết nhanh hơn. Có nhiều chiến lược khác nhau có thể làm cho quá trình học một từ hoặc cụm từ mới trở nên chủ động và hấp dẫn hơn. Trong thế giới kỹ thuật số ngày nay, không cần phải mở từ điển và sao chép định nghĩa.

Một phần không thể thiếu của việc dạy từ vựng ngày nay là viết hợp tác. Trong nhóm hoặc cả lớp học, bạn có thể viết chung điều gì đó, cho phép bạn mô hình hóa quá trình viết để sử dụng từ mới. Bạn cũng có thể sử dụng bảng thông minh của mình như một loại tranh tường hoặc bức tường graffiti. Bạn có thể đăng từ ngữ ở một phần và yêu cầu lớp học đóng góp các từ đồng nghĩa ở phía bên kia.

Để có một bài học từ vựng thực sự tương tác, bạn thậm chí có thể yêu cầu học sinh quay video ngắn về một từ mới mà họ đã tìm thấy và sau đó trình bày chúng cho lớp học của bạn dưới dạng một bộ phim nhỏ trên bảng thông minh của bạn.

4. Đọc Lưu loát
Nhiều giáo viên đặt mục tiêu làm cho học sinh của mình trở thành những người đọc “lưu loát”, những người đọc giống như cách họ nói và nói giống như cách họ đọc. Điều này cũng có nghĩa là học sinh có thể đọc một văn bản chính xác, nhanh chóng và với biểu cảm. Cách duy nhất để làm điều này là cho học sinh của bạn nhiều cơ hội để đọc và được tiếp xúc với cách đọc lưu loát.

Truyền thống, điều này có thể bao gồm việc giáo viên đọc cho học sinh của họ, hoặc để lớp học thay phiên nhau đọc những đoạn văn ngắn. Mặc dù điều này tốt, công nghệ bảng trắng kỹ thuật số có thể giúp làm cho điều này trở nên hấp dẫn hơn. Ví dụ, một hoạt động có thể bao gồm hình dung nơi đặt trọng âm trong câu, ghi âm giọng đọc của học sinh và chỉnh sửa, hoặc cung cấp cho lớp học một vài câu không có dấu câu và để họ quyết định sử dụng dấu câu nào để tạo điểm nhấn.

5. Hình dung sự hiểu biết khi đọc
Hiểu và xử lý một văn bản có thể là một điều khó học. Việc đọc lại, suy ngẫm và đánh dấu một văn bản không phải là điều mà hầu hết học sinh tự nhiên nắm bắt; nó thường đòi hỏi rất nhiều thực hành. Một cách tốt để dạy sự hiểu biết là vẽ các sơ đồ (như sơ đồ Venn về các điểm cốt truyện hoặc đặc điểm nhân vật) và chú thích một tài liệu đã chọn với các ghi chú ngắn gọn.

Điều này có thể dễ dàng thực hiện với không gian bảng trắng cộng tác của Explain Everything, cho dù nó trên thiết bị của học sinh hay tập thể trên bảng thông minh trong lớp học. Bạn có thể thêm màu sắc và tạo sơ đồ chỉ với một vài cú nhấp chuột.`,
  },
  {
    title:
      "Làm Kế hoạch bài học Khoa học theo mô hình 5E với Explain Everything",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/02/making-a-5e-science-lesson-plan-with-explain-everything-1-1536x768.png",
    discrible:
      "Những lợi ích của việc sử dụng kế hoạch bài học 5E để cấu trúc các lớp học đã được biết đến rộng rãi đối với các giáo viên khoa học ở khắp mọi nơi.",
    content: `Kế hoạch bài học 5E là gì?
Kế hoạch bài học 5E dựa trên một mô hình giảng dạy 5 giai đoạn. Năm “E” của mô hình là: Engage (Kích thích), Explore (Khám phá), Explain (Giải thích), Elaborate (Mở rộng) và Evaluate (Đánh giá). Theo thiết kế, một kế hoạch bài học 5E sẽ tránh việc truyền tải trước kiến thức đến học sinh, thay vào đó, cho phép họ tự mình khám phá và hiểu các khái niệm.

Mô hình này ban đầu được phát triển bởi Biological Sciences Curriculum Study (BSCS) vào năm 1987 và lần đầu tiên được đề xuất bởi Tiến sĩ Rodger Bybee. Mô hình giảng dạy 5E được thiết kế như một cách để cấu trúc các bài học khoa học và nâng cao hiểu biết của học sinh về các ý tưởng và khái niệm khoa học. Mặc dù được tạo ra cho giáo dục khoa học, nó đã trở thành một phương pháp phổ biến trong nhiều môn học khác.

Khám phá kế hoạch bài học khoa học 5E
Mục đích của mô hình 5E là cung cấp cho học sinh một phương tiện để kết nối các khái niệm khoa học trừu tượng với những trải nghiệm của riêng mình, điều đặc biệt hữu ích khi giảng dạy các khía cạnh kỹ thuật hơn của các môn khoa học. Nó cũng được coi là một cách tiếp cận khoa học điều tra, mô hình 5E cố gắng khơi dậy sự tò mò, khám phá và cần có bằng chứng dựa trên lý do cho sự biện hộ.

Dưới đây, chúng tôi đã trình bày một kế hoạch bài học khoa học 5E để cung cấp cho bạn một cái nhìn toàn diện về mô hình và cung cấp cho bạn một mẫu để giảng dạy các học phần khoa học với phương pháp này ngày nay.

1. Engage (Kích thích)
Giai đoạn đầu tiên của kế hoạch bài học khoa học 5E là Engage (Kích thích). Giai đoạn ban đầu này được thiết kế để kích thích sự tò mò của học sinh, thường bằng cách giới thiệu một câu hỏi hoặc khái niệm mà học sinh không thể giải quyết (chưa). Bạn thậm chí có thể thực hiện một thí nghiệm đơn giản để minh họa các khái niệm khoa học mà họ sẽ học. Nếu có thể, hãy cố gắng xây dựng trên các khái niệm đã học trong các bài học khác để tạo ra ý nghĩa trong tâm trí của học sinh.

Trong giai đoạn Engage, điều quan trọng là làm cho việc giảng dạy của bạn trở nên tương tác nhất có thể. Với bảng trắng cộng tác Explain Everything, thật dễ dàng để thu thập các dạng phương tiện khác nhau tại một nơi, vì vậy bạn có thể chuyển đổi liền mạch giữa hình ảnh, video và hoạt hình. Bạn cũng có thể tải ảnh của các bảng công việc và chú thích mọi thứ khi bạn đi qua.

Bạn thậm chí có thể mở rộng giai đoạn Engage bằng cách đặt nó như một bài tập về nhà cho lớp học.

2. Explore (Khám phá)
Giai đoạn thứ hai, Explore (Khám phá), sử dụng các hoạt động điều tra để cho phép học sinh chủ động quan sát những gì họ đang học, suy nghĩ phê phán về tài liệu và kết nối các khái niệm từ giai đoạn Engage. Bạn nên khuyến khích học sinh xem xét những gì họ đã biết và những gì họ đang cố gắng tìm hiểu/điều gì là vấn đề mà họ đang cố gắng giải quyết.

Điều này có thể thực hiện dưới hình thức bài tập phân loại các đối tượng tự nhiên khác nhau, một số loại điều tra trong phòng thí nghiệm theo nhóm, hoặc thậm chí các mô hình 3D tương tác mà mỗi học sinh phải cố gắng gán nhãn. Phần mềm thích nghi mô hình 3D của Explain Everything giúp dễ dàng mang các khái niệm lớn như nguyên tử, kích thước tương đối của động vật có vú và khủng long, hoặc thậm chí cách các tàu lượn siêu tốc điển hình được điều khiển chỉ bằng lực hấp dẫn đến cuộc sống.

3. Explain (Giải thích)
Giai đoạn thứ ba của kế hoạch bài học, Explain (Giải thích), là nơi giáo viên giải thích các khái niệm từ giai đoạn trước đó và hướng dẫn học sinh định nghĩa và hiểu được các phát hiện của mình. Trong một lớp học khoa học, phần này của kế hoạch bài học có thể bắt đầu bằng các cuộc trình bày ngắn về những gì học sinh đã khám phá trong giai đoạn Explore, sau đó là các câu hỏi hoặc hướng dẫn bổ sung từ giáo viên. Các câu hỏi và hướng dẫn bổ sung sau đó có thể được sử dụng để chuyển tiếp vào một cuộc thảo luận sâu hơn về các khái niệm chính được giảng dạy.

Các bài thuyết trình đa phương tiện và các bài trình chiếu động trên bảng trắng cộng tác có thể giúp thu hút và củng cố giải thích của bạn ở giai đoạn này.

4. Elaborate (Mở rộng)
Trong giai đoạn Elaborate, học sinh được mời áp dụng những gì họ đã hiểu từ các giai đoạn trước bằng cách giải quyết một vấn đề trong bối cảnh mới. Điều này có thể được thực hiện trong lớp học hoặc được giao như bài tập về nhà, theo nhóm hoặc cá nhân. Bạn cũng có thể sử dụng giai đoạn này để mở rộng hiểu biết của lớp học về chủ đề bằng cách kết nối nó với thế giới thực hoặc trải nghiệm cá nhân của họ.

Điều này có thể thực hiện dưới hình thức các hoạt động dự án hợp tác, nơi học sinh phải nghiên cứu các ví dụ về những gì họ đã học, hoặc một bài kiểm tra tương tác về các khái niệm mới được khám phá. Với khả năng phát sóng đến các thiết bị khác, lưu trữ và chỉnh sửa các bài tập kỹ thuật số, bảng trắng cộng tác Explain Everything giúp giai đoạn thứ 4 của kế hoạch bài học 5E trở nên đơn giản và hiệu quả.

5. Evaluate (Đánh giá)
Trong giai đoạn cuối cùng, học sinh thể hiện sự thành thạo các khái niệm khoa học từ các giai đoạn trước. Đây cũng là nơi giáo viên phải đánh giá mức độ hiểu biết của học sinh và nếu các mục tiêu của bài học đã được đạt. Đây cũng là thời điểm hoàn hảo để cung cấp phản hồi cho học sinh về sự tham gia và học tập của họ.

Giai đoạn cuối cùng này có thể được thực hiện theo bất kỳ hình thức nào mà giáo viên thấy phù hợp cho lớp học của mình. Ví dụ, bạn không cần giới hạn đánh giá trong một bài kiểm tra hoặc bài kiểm tra chính thức. Trên thực tế, nhiều loại đánh giá khác nhau có thể có lợi hơn trong ngữ cảnh này. Bảng trắng cộng tác Explain Everything là một cách tuyệt vời để học sinh trở nên sáng tạo và trình bày những gì họ đã học theo nhiều định dạng khác nhau, bao gồm các bài thuyết trình video và âm thanh. Bằng cách cho phép họ áp dụng kiến thức của mình vào điều gì đó mà họ có thể liên quan đến, các khái niệm khoa học trừu tượng trở nên dễ hiểu và đáng nhớ.

Bạn có thể đã sử dụng một số khái niệm trên trong các bài học khoa học của mình, vì vậy chúng tôi khuyến khích bạn suy ngẫm về những điều trên và nghĩ về cách bạn có thể nhẹ nhàng tích hợp mô hình 5E vào thực hành hiện tại của mình. Trên thực tế, không cần phải xây dựng tất cả các bước cùng một lúc, bạn có thể bắt đầu từ những bước nhỏ và trải rộng các giai đoạn trong nhiều bài học nếu cần thiết.`,
  },
];
const blogsAr = [
  {
    title: "دليل المعلم لأنواع التقييمات المختلفة",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/07/casualfilms_k12_9646_1121.jpg",
    discrible:
      "التقييمات جزء أساسي من التعليم. في حين أن الكثير من الناس يخطئون في الاعتقاد بأن التقييم هو دائمًا الهدف النهائي، يمكن - ويجب - أن تحدث أنواع مختلفة من التقييمات على مدار العام الدراسي.",
    content: `استكشاف أنواع التقييم المختلفة
التقييمات جزء أساسي من التعليم. في حين أن الكثير من الناس يخطئون في الاعتقاد بأن التقييم هو دائمًا الهدف النهائي، يمكن - ويجب - أن تحدث أنواع مختلفة من التقييمات على مدار العام الدراسي.

يساعد نوع التقييم المناسب المعلمين في فهم ما تعلمه طلابهم والمجالات التي يحتاجون إلى تحسينها. كما أنها تمكن الطلاب من التعرف بشكل أفضل على نقاط قوتهم وضعفهم.

ثلاثة من أكثر أنواع التقييم شيوعًا هي التشخيصي، التكويني، والنهائي.

التقييم التشخيصي
يُعرف أيضًا بالاختبار القبلي، يتمثل التقييم التشخيصي في تحديد المعرفة التي يمتلكها الطالب قبل بدء التعلم الرسمي. يمكن للمعلمين بعد ذلك استخدام هذه المعلومات لتعديل دروسهم وفقًا لذلك وتخصيص كمية الاهتمام التي يتلقاها كل طالب.

نظرًا لأن التقييم التشخيصي يهدف إلى فهم معرفة الطلاب الحالية ونقاط القوة والضعف لديهم، فلن يُحسب في الدرجات. الهدف هو تحسين التدريس من خلال التعرف على المجالات التي تحتاج إلى تحسين؛ ولا يكون أبدًا للحكم على الطلاب بما لا يعرفونه.`,
  },
  {
    title: "أمثلة على أهداف SMART للمعلمين والطلاب",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/06/gettyimages-1291370118-1-1536x1024.jpg",
    discrible:
      "أهداف SMART في التعليم وفقًا للنظريين الرائدين لوك ولاثام، يحقق الطلاب الذين يحددون أهدافًا محددة أداءً أفضل في المدرسة من أولئك الذين لا يحددون أهدافًا.",
    content: `أهداف SMART في التعليم
وفقًا للنظريين الرائدين لوك ولاثام، يحقق الطلاب الذين يحددون أهدافًا محددة أداءً أفضل في المدرسة من أولئك الذين لا يحددون أهدافًا. يمكن للمعلمين تحسين أداء طلابهم من خلال دمج تحديد الأهداف في الفصل الدراسي. ولكن هذه ليست الطريقة الوحيدة التي يمكن أن تساعد بها الأهداف في التعليم. يعد تحديد الأهداف مهمًا أيضًا في تطوير المهارات المهنية، لذا يمكن - ويجب - أن يحدد المعلمون أهدافًا لأنفسهم.

يمكن أن تساعد منهجية SMART المعلمين والطلاب في إنشاء أهداف قوية ومحددة. يمكن للمعلمين استخدام أهداف SMART لتحسين هيكلة الدروس، ودعم تعليم طلابهم، وتعزيز تقدمهم المهني.

ما هي أهداف SMART؟
أهداف SMART هي أهداف ذات إطار عمل منظم يجعلها أكثر واقعية لتحقيقها. يمكن استخدام أهداف SMART لأغراض متعددة، بما في ذلك التعليم، والنمو المهني، والتطوير الشخصي.

SMART هو اختصار للأشياء الخمسة التي يجب أن تتوافر في الهدف:

محدد
قابل للقياس
قابل للتحقيق
ذو صلة
مرتبط بالزمن
م - محدد
يجب أن تحدد أهداف SMART بوضوح الإنجاز النهائي، ومن هو المسؤول عنه، وما الخطوات التي يحتاج الشخص إلى اتخاذها لتحقيقه.

على سبيل المثال، يمكن أن يكون هدف SMART محدد لطالب ما: "سأحقق أكثر من 80٪ في اختبار الإملاء في نهاية الفصل الدراسي عن طريق صنع بطاقات ذاكرة لأي أخطاء سابقة والمراجعة لمدة ساعة كل أسبوع." من غير المرجح أن يحقق الطالب هدفًا عامًا مثل "سأحسن إملائي" لأنه غير واضح كيف يمكن الوصول إلى هذا الهدف.

ق - قابل للقياس
من خلال تحديد أهدافك بشكل كمي، يمكنك قياس إنجازك بشكل موضوعي. كما يسهل عليك تتبع تقدمك.

يجب أن تنشئ إطارًا للقياس لجعل الهدف قابلاً للقياس. لذلك، إذا أراد المعلم تحسين رضا الطلاب في الفصل، يجب أن يحدد معيارًا. مع السبورة الرقمية من Explain Everything، يمكن للمعلمين دعوة طلابهم للرسم على السبورة وكتابة رقم بناءً على مقدار استمتاعهم أو تعلمهم من نشاط معين. ثم يمكن للمعلمين التقاط لقطات شاشة وقياس الدرجات المتوسطة بمرور الوقت.

ق - قابل للتحقيق
يجب أن تكون الأهداف قابلة للتحقيق - ولكن ليست سهلة للغاية.

يجب عليك أيضًا مراعاة ما يمكنك التحكم فيه. قد لا يكون من القابل للتحقيق لطفل أن "يكون الأفضل في كرة السلة في المدرسة"، حيث لا يمكنه التحكم في تقدم أقرانه. ومع ذلك، يمكنه تحديد أهداف لنفسه حول عدد مرات التدريب ومدى تحسين دقة التسديد.

ذ - ذو صلة
يجب أن تفهم لماذا تضع هدفًا.

إذا كان المعلم يريد أن يصبح رئيسًا لقسم معين، فقد يحدد أهداف SMART تتعلق بتعزيز معرفته وتحسين مهاراته المهنية. قد تكون أهداف SMART العامة المتعلقة بتحسين الكفاءة أقل صلة، إلا إذا كان هذا هو السبب الذي منعه من الترقية.

ت - مرتبط بالزمن
يجب أن يكون واضحًا متى يجب إكمال الهدف.

لضمان تنفيذ أهداف SMART بفعالية في التعليم، ينبغي النظر في استخدام أطر زمنية مثل الفصول الدراسية، أو الفصول الدراسية، أو السنوات.`,
  },
  {
    title: "كيفية استخدام مخططات التقارب لتمكين الطلاب",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/06/gettyimages-1021823026-1-1536x864.jpg",
    discrible:
      "بينما تُستخدم مخططات التقارب في الغالب من قبل محترفي تجربة المستخدم (UX)، يمكن للمعلمين تعديل العملية لتناسب البيئات التعليمية. يمكن للمعلمين استخدامها كأداة تدريس لتشجيع التفكير الحر؛ حتى أنها لها مكانها كطريقة للمراجعة.",
    content: `التخطيط التقاربي في التعليم
التخطيط التقاربي هو طريقة لتنظيم الأفكار من جلسة العصف الذهني.

بينما تُستخدم مخططات التقارب في الغالب من قبل محترفي تجربة المستخدم (UX)، يمكن للمعلمين تعديل العملية لتناسب البيئات التعليمية. يمكن للمعلمين استخدامها كأداة تدريس لتشجيع التفكير الحر؛ حتى أنها لها مكانها كطريقة للمراجعة. لأن التخطيط التقاربي هو امتداد للعصف الذهني، فإنه يمنح الطلاب الحرية في استكشاف أفكارهم. يمكن أن يكون هذا تجربة تعلم تمكينية.

تم إكمال التخطيط التقاربي تقليديًا باستخدام ملاحظات لاصقة على الجدران أو اللوحات البيضاء. ولكن مع التكنولوجيا اليوم، مثل السبورة الإلكترونية من Explain Everything، يمكنك رقمنة العملية - مما يفتح فرصًا جديدة للتعاون ويجعل من السهل حفظ النتائج.

ما هو مخطط التقارب؟
مخطط التقارب، المعروف أيضًا باسم مخطط التقارب أو خريطة التقارب، هو طريقة بصرية لتنظيم الأفكار من جلسة العصف الذهني.

تعمل هذه الطريقة عن طريق تنظيم نتائج العصف الذهني (عادةً على ملاحظات لاصقة أو ما يعادلها الرقمي) في مجموعات. ثم يعطون اسمًا للفئات المختلفة. على سبيل المثال، قد يقوم مجموعة من الطلاب بالعصف الذهني حول موضوع "ما الذي يجعل القصة جيدة؟". قد يخرجون بنقاط متنوعة ويمكنهم بعد ذلك تصنيفها في فئات مثل "الشخصيات"، "الحبكة"، و"أسلوب الكتابة". من خلال هذا العرض، يمكنهم بعد ذلك فهم الموضوعات التي حددوها من خلال العصف الذهني والنقاط الرئيسية.

مخططات التقارب معروفة أيضًا باسم تقنية KJ، نسبة إلى مبتكرها، جيرو كاواكيتا. مع طريقة KJ، من المهم التصويت على المجموعات الأكثر أهمية وتصنيفها وفقًا لذلك. يمكن استخدام ذلك عندما يتفق مجموعة على فكرة يريدون التركيز عليها أو اعتبارها الأكثر أهمية. ومع ذلك، قد لا يكون لها دائمًا مكان في التعليم. على سبيل المثال، لنفترض أن الطلاب يستخدمون مخططات التقارب كطريقة لتصور معرفتهم بموضوع ما بدلاً من اقتراحات للأشياء التي يريدون تغييرها. في هذه الحالة، ليس من المناسب تصنيف المجموعات. إذا لم يكن التصنيف مطلوبًا، فقد ترغب في اعتبار مخططات التقارب مكتملة بعد عملية التجميع.`,
  },
  {
    title: "كيف ترسم ملاحظاتك؟ التدوين البصري باستخدام السبورة",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/03/sketchnoting-cover-1536x768.png",
    discrible:
      "كيف ترسم ملاحظاتك عبر الإنترنت؟ التدوين البصري، أو التدوين المرئي، هو تطبيق عملي لما يسمى نظرية الترميز المزدوج، بفضل كيفية دمجها للكلمات والصور لنقل رسالة.",
    content: `كيف ترسم ملاحظاتك وما هو التدوين البصري؟
يعرّف رود التدوينات البصرية بأنها "خرائط بصرية تجمع بين الكلمات المكتوبة والصور مع توفير الهيكل من خلال تنويعات في الإطارات، الفواصل، النقاط، الرموز، والموصلات مثل الخطوط والسهام". لذا فإن هذه الأنواع من الملاحظات هي خرائط بصرية تجمع بين الكلمات المكتوبة والصور.

إضافة الرسومات إلى تدريس وتعلمك اليومي يمكن أن يساعدك في تحسين استبقاء المواد التي تعمل معها وذاكرتك بشكل عام. يمكن أن يحوّل التدوين البصري الملاحظات التقليدية إلى تفسيرات ذات مغزى للنقاشات، المحاضرات، والمعرفة المكتسبة.

الأبحاث والنظريات حول تلخيص كيفية رسم الملاحظات
وفقًا لكتاب "التدريس الفعال في الفصول الدراسية"، من أجل تلخيص فعال، يجب على الطلاب حذف بعض المعلومات، استبدال بعض المعلومات، والاحتفاظ ببعض المعلومات. هذا هو المثال المثالي على كيفية أن يصبح التدوين البصري أفضل صديق للطلاب.

قدّم هذا المفهوم لطلابك حتى يتمكنوا من البدء في عمل ملخصاتهم الخاصة للمواد باستخدام التدوين البصري. قم بتحضير مقال قصير يركز على موضوع معين. ثم اطلب من طلابك إنشاء ملاحظة بصرية تصف ما تعلموه.

عملية التدوين البصري
قدّم نصًا موجهًا نحو فهم القراءة.
اطلب من طلابك حذف الأشياء التي لا تتعلق بالنص.
استبدل بعض الأشياء ولكن احتفظ بأهم البيانات والحقائق.
قم بعمل ملخص قصير باستخدام التدوين البصري.
كيف ترسم ملاحظاتك؟ البدء في التدوين البصري الرقمي سهل.
يمكن بسهولة تحويل التدوينات البصرية العادية إلى تدوين بصري رقمي. إذا كنت ترغب في الوصول إلى جميع مواردك في مكان واحد على السحابة، فإن هذا السيناريو يناسبك! تسمح لك السبورة الرقمية من Explain Everything بتخزين جميع موادك بشكل ملائم واستخدامها أينما كنت.

لنلقِ نظرة على أساسيات التدوين البصري الرقمي. اتبع الخطوات أدناه لإنشاء أول تدوين بصري رقمي لك. نعم، هناك تطبيق لذلك!`,
  },
  {
    title:
      "هل سمعت؟ Explain Everything Advanced متاحة الآن على متاجر التطبيقات.",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/05/ee_advanced_cover-1536x768.png",
    discrible:
      "لقد مرت تقريبًا سنتان منذ أن انضمت Explain Everything إلى Promethean – شركة رائدة عالميًا في تكنولوجيا التعليم. والآن، أصبحت Explain Everything أفضل مع ميزات جديدة مثيرة وخطة Explain Everything Advanced.",
    content: `نحن نقدم أيضًا خطط Explain Everything Advanced مخصصة للمؤسسات، مثل المدارس والمناطق التعليمية، وهي مثالية لمجموعات المعلمين الذين يحتاجون إلى الوصول إلى أدوات الإدارة، وتكاملات LMS، ووظائف التعاون الموسعة.

أنا على خطة المعلم الفردي - ما التغييرات؟
إذا كنت تستخدم Explain Everything حاليًا على خطة المعلم الفردي ($34.99/سنة)، يمكنك تجديد اشتراكك ومواصلة استخدام التطبيق بنفس السعر.
إذا اخترت إلغاء اشتراكك بعد 10 يونيو 2024، فستتمكن فقط من بدء اشتراك جديد لخطة Explain Everything Advanced.

عند إلغاء خطة المعلم الفردي، سيقدم لك التطبيق خيار شراء خطة Explain Everything Advanced الجديدة. لذلك، إذا كنت راضيًا عن خطة المعلم الفردي، فما عليك سوى تجديد اشتراكك.

أنا على خطة فردية / خطة المحترفين - هل تغيرت تلك الخطة؟
لا، إذا كنت مستخدمًا لخطة فردية أو خطة المحترفين، فسيظل سعر اشتراكك كما هو. ولكن، ستحصل على مكافأة إضافية - سيتضمن التطبيق الآن ميزات مثل استطلاعات Promethean، والمؤقت، والدوّار.`,
  },
  {
    title: "كيف تصنع خريطة بيئية باستخدام السبورة الإلكترونية",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/05/aplx_ee_advanced_uk_secondary_0424v1.png",
    discrible:
      "الخريطة البيئية هي أداة رائعة تسمح للمعلم بتصور الأشخاص المهمين لطلابه. على عكس الرسوم البيانية للجينات، الخريطة البيئية هي تصور للشبكة الشخصية لطفل أو شاب. يمكن أن تشمل جميع أنواع العلاقات الشخصية، وليس فقط العائلة.",
    content: `ما هي الخريطة البيئية؟
الخريطة البيئية هي أداة رائعة تسمح للمعلم بتصور الأشخاص المهمين لطلابه. على عكس الرسوم البيانية للجينات، الخريطة البيئية هي تصور للشبكة الشخصية لطفل أو شاب. يمكن أن تشمل جميع أنواع العلاقات الشخصية، وليس فقط العائلة. يشمل ذلك الأصدقاء، الجيران، أو حتى موظفي المدرسة.

في الممارسة العملية، تشبه الخريطة البيئية خريطة ذهنية تقليدية أو مخطط عنكبوتي. في مركز الخريطة البيئية يوجد اسم الطالب الذي يصنع الخريطة. ثم توجههم لكتابة جميع الأشخاص والأماكن التي تعني لهم الكثير. للحفاظ على هذه النشاط منظمًا ومنتجًا، يمكنك تصميم خريطة بيئية مسبقًا ثم مشاركة التصميم مع الفصل. قد يكون من المفيد أن تصنع واحدة بنفسك وتعرضها على الفصل كمثال.

تطوير خريطة بيئية مع طلابك يمنحك نافذة فريدة على سياق حياتهم ويعد طريقة رائعة للطلاب الآخرين لاكتشاف اهتمامات مشتركة. الخرائط البيئية مفيدة بشكل خاص للطلاب الجدد في الفصل أو في بداية العام الدراسي كنشاط تعريفي.

فوائد الخريطة البيئية
هناك عدد من الفوائد لصنع الخرائط البيئية في فصلك الدراسي إلى جانب ما ذُكر أعلاه. يمكن للخرائط البيئية:

أن تكون طريقة رائعة لفهم والتواصل مع الطلاب التقليديين الأكثر خجلًا. ينطبق هذا بشكل خاص على الفصول الكبيرة حيث قد يجد الطلاب صعوبة في العثور على مساحة للتعبير الكامل عن أنفسهم.
أن تكون مشوقة جدًا وسهلة الصنع. إذا كنت تستخدم السبورة الإلكترونية أو إذا كان طلابك يستخدمون التكنولوجيا الرقمية، مثل الأجهزة اللوحية، للتعلم والمساهمة في الفصل، فإن الخرائط البيئية هي نشاط رائع لملء أي وقت بين الدروس.
أن تكون نشاط تعلم يتمحور حول الطالب لأنه يضع الطالب الذي يصنع الخريطة البيئية في مركز المعلومات التي يشاركها (فهم دائمًا في مركز الخريطة البيئية)، مع منحهم الفرصة للتعبير عن اهتماماتهم.
أن تكون نشاطًا رائعًا يمنح الطلاب استراحة من التعلم المكثف ويتيح لهم التركيز على مهمة أكثر إبداعًا ولكن لا تزال منظمة. مع أهمية الأنشطة الاجتماعية - العاطفية في التدريس اليوم، يمكن أن تكون الخرائط البيئية مقدمة رائعة لـ SEL للطلاب الأكبر سنًا.`,
  },
  {
    title: "تكاملات وتطبيقات Explain Everything في لمحة",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/06/explain-everything-integrations-and-apps-in-a-nutshell-1-1536x768.png",
    discrible:
      "اليوم، دعونا نتناول تكاملات Explain Everything الشائعة وأنظمة إدارة التعلم (LMS) التي تدعم منتجنا!",
    content: `Google Classroom
Google Classroom معروف كواحد من أنظمة إدارة التعلم (LMS) الأكثر شيوعًا في مجال تكنولوجيا التعليم. في Explain Everything، هدفنا هو تبسيط عملية التدريس والتعلم لكل معلم. لتحقيق ذلك، قمنا بتطوير تكامل مخصص مع Google Classroom.

مع السبورة الإلكترونية من Explain Everything، يصبح إنشاء المهام سهلًا للغاية. يتيح لك زر السحر لدينا مشاركة المهام مباشرة إلى Google Classroom، مما يوفر قدرًا كبيرًا من الوقت ويبسط العملية بأكملها.

Canvas
Canvas هو نظام إدارة تعلم (LMS) يعتمد على الويب. يُستخدم من قبل المؤسسات التعليمية، والمعلمين، والطلاب للوصول إلى مواد التعلم عبر الإنترنت وإدارتها.

يتضمن Canvas مجموعة متنوعة من أدوات إنشاء وإدارة الدورات القابلة للتخصيص، وتحليلات وإحصاءات الدورات والمستخدمين، وأدوات الاتصال الداخلية.

اطلع على كيفية دمج كل من Explain Everything وCanvas.

Moodle
يُستخدم Moodle للتعلم المختلط، التعليم عن بُعد، الفصل الدراسي المقلوب، ومشاريع التعلم عبر الإنترنت الأخرى في المدارس، الجامعات، أماكن العمل، والقطاعات الأخرى.

اطلع على كيفية دمج كل من Explain Everything وMoodle.

Schoology
Schoology هو نظام إدارة تعلم (LMS) يعتمد على الويب يتيح للمعلمين إنشاء وتعيين المهام التقليدية والإبداعية. من بين الميزات الأكثر استخدامًا هي إنشاء وتقديم المهام، دفتر الدرجات، الروابط إلى المحتوى الخارجي، التقييم PDF، تقارير تقدم الطلاب، والرسائل.

اطلع على كيفية دمج كل من Explain Everything وSchoology.`,
  },
  {
    title: "تعليم القراءة والكتابة باستخدام السبورة الذكية",
    image:
      "https://explaineverything.com/wp-content/uploads/2023/04/image-15.png",
    discrible:
      "في قلب تطور الطفل الأكاديمي تكمن مستوى إلمامه بالقراءة والكتابة. بناء معرفة أساسية قوية للقراءة والكتابة هو أحد أهم الأشياء التي يمكن أن يقوم بها المعلم.",
    content: `في قلب تطور الطفل الأكاديمي تكمن مستوى إلمامه بالقراءة والكتابة. بناء معرفة أساسية قوية للقراءة والكتابة هو أحد أهم الأشياء التي يمكن أن يقوم بها المعلم. ومع ذلك، من السهل نسيان مدى صعوبة تعلم القراءة والكتابة لأول مرة. بعد كل شيء، قضى المعلمون جزءًا كبيرًا من تدريبهم ومسيراتهم المهنية في استيعاب الكثير من العملية.

على عكس الرياضيات أو العلوم، فإن تقسيم القراءة والكتابة إلى خطوات واضحة ومنطقية ليس دائمًا سهلًا. يسقط العديد من المعلمين في فخ تخصيص القراءة والكتابة كواجب منزلي في وقت مبكر. تبنى المهارات القوية في القراءة والكتابة في الفصل الدراسي وهناك العديد من الاستراتيجيات التي يمكن أن يستخدمها المعلمون لتعليم هذه المهارات الأساسية.

5 استراتيجيات لتعليم القراءة والكتابة باستخدام السبورة الذكية/السبورة الإلكترونية
مع ظهور السبورات الإلكترونية، أصبح جعل التعلم للقراءة والكتابة ممتعًا وجذابًا أسهل من أي وقت مضى. أدناه، قمنا باقتراح 5 استراتيجيات ستساعد في تعزيز وتوجيه دروس القراءة والكتابة باستخدام السبورة الذكية. ومع ذلك، يمكن تطبيق العديد من الأفكار التي نوقشت أدناه على الفصول الدراسية بدونها.

1. التفكير في الأصوات والحروف
فهم كيفية قراءة وكتابة لغة أبجدية عبر العلاقات بين الأصوات المنطوقة للغة، أو الأصوات، هو أحد الركائز الأساسية لتدريس القراءة والكتابة. يأتي الكلام دائمًا قبل القراءة، لذا فإن الوعي الصوتي في الفصل الدراسي أمر أساسي. مع مساعدة السبورة الإلكترونية، يمكنك بسهولة إنشاء ألعاب تفاعلية تعزز فهم الطلاب الصوتي وتعليم المهارات الحروفية الأساسية.

مع مكتبة القصاصات الفنية من Explain Everything، يمكنك إنشاء مجموعة من أزواج الصور لمساعدة الطلاب في التعرف على الكلمات المتجانسة، جمع مجموعة من الصور التي تحتاج إلى تصنيفها إلى أصوات بداية أو نهاية، أو إنشاء تسجيلات لبعض الكلمات وجعل طلابك يكتبون ويهجئون الكلمة التي يسمعونها. يمكن أن تساعد التكنولوجيا التعليمية التفاعلية الأطفال في استيعاب التهجئة، البادئات، واللاحقات بسرعة وكفاءة أكبر.

2. كن مبدعًا
الكتابة الإبداعية هي واحدة من أفضل الطرق لجذب الطلاب إلى ممارسة الكتابة. لا تعطيهم فقط فرصة للتعبير عن أنفسهم وربط تجربة الكتابة باهتماماتهم الشخصية، بل إنها تساعدهم أيضًا في ترتيب وتنظيم تفكيرهم وقدراتهم النقدية. بإرشاد محترف تعليمي، توفر الكتابة الإبداعية للطلاب الفرصة لتوسيع مفرداتهم وممارسة التهجئة، وتجريب تراكيب الجمل الجديدة، وتطبيق القواعد بشكل صحيح.

مع السبورة الإلكترونية، واحدة من استراتيجيات الكتابة الإبداعية الفعالة هي عرض مجموعة من الصور، الكلمات، والرموز النحوية، وتكليف الفصل بإنشاء قصة قصيرة مع هذه العناصر. بالمثل، جلسات الكتابة الإبداعية القصيرة حيث يكتب الطلاب ردًا على صورة، فيديو، أو رسوم متحركة، هي طريقة مثالية لملء الفترات بين الدروس وممارسة مهارات القراءة والكتابة الحيوية.

تذكر، القراءة والكتابة مكملتان لبعضهما البعض، لذا، إذا كان ممكنًا، امنح الطلاب الفرصة للكتابة عن نص يدرسونه حاليًا.

3. تعلم المفردات بنشاط
إعطاء الطلاب فرصة لبناء مفرداتهم بنشاط، بدلاً من تعلم الكلمات الجديدة بشكل سلبي، سيمكنهم من تحسين مهارات القراءة والكتابة بسرعة أكبر. هناك العديد من الاستراتيجيات المختلفة التي يمكن أن تجعل عملية تعلم كلمة جديدة أو عبارة أكثر نشاطًا وجاذبية. في عالمنا الرقمي اليوم، لا حاجة لاستخراج قاموس ونسخ التعريفات.

أحد دعائم تدريس المفردات اليوم هو الكتابة التعاونية. في مجموعات أو كصف دراسي، يمكنك كتابة شيء معًا، مما يتيح لك نموذج عملية الكتابة نحو استخدام الكلمات الجديدة. يمكنك أيضًا استخدام السبورة الذكية كنوع من الجدارية أو جدار الجرافيتي. يمكنك نشر الكلمات في جزء واحد وطلب من الصف المساهمة في المرادفات في الجانب الآخر.

لدرس مفردات تفاعلي حقًا، يمكنك حتى أن تطلب من طلابك تسجيل مقاطع فيديو قصيرة حول كلمة جديدة وجدوها ثم عرضها على صفك كفيلم صغير على السبورة الذكية.

4. القراءة بطلاقة
يسعى العديد من المعلمين إلى جعل طلابهم "قارئين بطلاقة"، الذين يقرؤون بنفس الطريقة التي يتحدثون بها ويتحدثون بنفس الطريقة التي يقرؤون بها. وهذا يعني أيضًا أن الطالب يمكنه قراءة النص بدقة، بسرعة، وبشكل معبر. الطريقة الوحيدة لتحقيق ذلك هي إعطاء طلابك فرصًا متعددة للقراءة والتعرض لما تبدو عليه الطلاقة.

تقليديًا، قد يتضمن ذلك قراءة المعلم لطلابه، أو جعل الفصل يتناوبون في قراءة مقاطع قصيرة. على الرغم من أن هذا جيد، يمكن أن تساعد التكنولوجيا السبورة الإلكترونية في جعل هذا أكثر جاذبية. على سبيل المثال، قد تتضمن النشاطات تصور أماكن وضع النبرة في الجمل، تسجيل قراءات الطلاب لمقطع وتصحيحه، أو تقديم جمل قليلة بدون علامات ترقيم وتركهم يقررون أي علامات الترقيم تستخدم لإنشاء النبرة.

5. تصور فهم القراءة
فهم ومعالجة النص يمكن أن يكون أمرًا صعبًا للتعلم. إعادة القراءة، التفكير، وتحديد نص ليس شيئًا يأتي طبيعيًا لمعظم الطلاب؛ غالبًا ما يتطلب الكثير من الممارسة. طريقة جيدة لتدريس الفهم هي رسم مخططات مادية (مثل مخططات فين للنقاط المؤامرة أو سمات الشخصيات) وتدوين وثيقة مختارة بملاحظات مختصرة.

يمكن تحقيق ذلك بسهولة باستخدام مساحة السبورة الإلكترونية التعاونية من Explain Everything، سواء كانت على جهاز الطالب الخاص أو بشكل جماعي على السبورة الذكية في الفصل الدراسي. يمكنك إضافة الألوان وإنشاء المخططات بنقرات قليلة فقط.`,
  },
  {
    title: "إعداد خطة درس علمية بنموذج 5E باستخدام Explain Everything",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/02/making-a-5e-science-lesson-plan-with-explain-everything-1-1536x768.png",
    discrible:
      "فوائد استخدام خطة درس 5E لتنظيم الدروس معروفة جيدًا لدى معلمي العلوم في كل مكان.",
    content: `ما هي خطة درس 5E؟
تعتمد خطة درس 5E على نموذج تعليمي يتألف من خمس مراحل. الخمس "E" للنموذج هي: Engage (إثارة)، Explore (استكشاف)، Explain (تفسير)، Elaborate (توسيع)، Evaluate (تقييم). صُممت خطة الدرس 5E لتجنب تحميل الطلاب بالمعلومات في البداية، بدلاً من ذلك، السماح لهم بالتفاعل مع المفاهيم واكتشافها بأنفسهم.

تم تطوير النموذج أصلاً من قبل دراسة مناهج العلوم البيولوجية (BSCS) في عام 1987 وتم اقتراحه لأول مرة من قبل الدكتور روجر بي. تم تصميم نموذج التعليم 5E كوسيلة لتنظيم دروس العلوم وتعزيز فهم الطلاب للأفكار والمفاهيم العلمية. على الرغم من أنه تم إنشاؤه للتعليم العلمي، إلا أنه أصبح منهجًا شائعًا عبر العديد من المواد الأخرى.

استكشاف خطة درس العلوم بنموذج 5E
يهدف نموذج 5E إلى تزويد الطلاب بوسيلة لربط المفاهيم العلمية المجردة بتجاربهم الخاصة، وهو أمر مفيد بشكل خاص عند تدريس الجوانب الفنية للعلوم. يُنظر إليه أيضًا كنهج للعلوم الاستقصائية، يسعى نموذج 5E إلى إثارة الفضول، والاستكشاف، والحاجة إلى تفسيرات تستند إلى الأدلة لتبرير.

فيما يلي خطة درس علمي بنموذج 5E لتزويدك بفهم كامل للنموذج ولتقديم قالب لتدريس وحدات العلوم بهذا المنهج اليوم.

1. Engage (إثارة)
المرحلة الأولى من خطة الدرس العلمي بنموذج 5E هي Engage (إثارة). تم تصميم هذه المرحلة الأولية لإثارة فضول الطلاب، عادةً من خلال تقديم سؤال أو مفهوم لا يمكن للطلاب حله (حتى الآن). يمكنك حتى إجراء تجربة بسيطة لإظهار المفاهيم العلمية التي سيتعلمونها. إذا أمكن، حاول بناء على المفاهيم التي تعلموها في دروس أخرى لخلق معنى في عقول الطلاب.

أثناء مرحلة Engage، من المهم جعل تدريس طلابك تفاعليًا قدر الإمكان. مع السبورة التعاونية من Explain Everything، من السهل تجميع أنواع مختلفة من الوسائط في مكان واحد، حتى تتمكن من التبديل بين الصور، الفيديوهات، والرسوم المتحركة بسلاسة. يمكنك أيضًا تحميل صور لأوراق العمل وتدوين كل شيء أثناء التقدم.

يمكنك حتى توسيع مرحلة Engage من خلال تعيينها كواجب منزلي للصف.

2. Explore (استكشاف)
المرحلة الثانية، Explore (استكشاف)، تستخدم الأنشطة الاستقصائية للسماح للطلاب بملاحظة ما يدرسونه بنشاط، والتفكير النقدي في المادة، وربط المفاهيم من مرحلة Engage. يجب أن تشجع الطلاب على التفكير فيما يعرفونه بالفعل وما يحاولون اكتشافه/ما هي المشكلة التي يحاولون حلها.

يمكن أن يتخذ هذا شكل تمرين تصنيف لأشياء طبيعية مختلفة، أو نوع من التحقيق المعملي كمجموعة، أو حتى نماذج ثلاثية الأبعاد تفاعلية يجب على كل طالب محاولة وضع علامات عليها. يساعد برنامج النماذج ثلاثية الأبعاد التكيفي من Explain Everything في إحياء المفاهيم الكبيرة مثل الذرة، الحجم النسبي للثدييات والديناصورات، أو حتى كيفية تشغيل الأفعوانيات النموذجية بواسطة الجاذبية فقط.

3. Explain (تفسير)
المرحلة الثالثة من خطة الدرس، Explain (تفسير)، هي حيث يفسر المعلم المفاهيم من المرحلة السابقة ويقود الطلاب نحو تعريف وفهم نتائجهم. في صف العلوم، قد تبدأ هذه الجزء من خطة الدرس بعروض قصيرة لما اكتشفه الطلاب في مرحلة Explore، يليها توجيهات أو أسئلة إضافية من المعلم. يمكن استخدام الأسئلة والتوجيهات الإضافية للانتقال إلى مناقشة أعمق حول المفاهيم الرئيسية التي تم تدريسها.

العروض التقديمية المتعددة الوسائط والعروض التقديمية الديناميكية على السبورة التعاونية يمكن أن تساعد في جذب وتدعيم تفسيرك في هذه المرحلة.

4. Elaborate (توسيع)
في مرحلة Elaborate، يُدعى الطلاب لتطبيق ما فهموه من المراحل السابقة عن طريق حل مشكلة في سياق جديد. يمكن القيام بذلك في الفصل أو تكليفها كواجب منزلي، في مجموعات أو فرديًا. يمكنك أيضًا استخدام هذه المرحلة لتوسيع فهم صفك للموضوع من خلال ربطه بالعالم الحقيقي أو تجاربهم الشخصية.

يمكن أن يتخذ هذا شكل الأنشطة التعاونية القائمة على المشروع، حيث يتعين على الطلاب البحث عن أمثلة لما تعلموه، أو اختبار تفاعلي حول المفاهيم المكتشفة حديثًا. مع القدرة على البث إلى الأجهزة الأخرى، وتخزين، وتحرير الواجبات الرقمية، تجعل السبورة التعاونية من Explain Everything المرحلة الرابعة من خطة الدرس بنموذج 5E بسيطة وفعالة.

5. Evaluate (تقييم)
في المرحلة النهائية، يظهر الطلاب إتقانهم للمفاهيم العلمية من المراحل السابقة. إنه أيضًا المكان الذي يجب على المعلم تقييم مستوى فهم طلابهم وإذا تم تحقيق أهداف الدرس. هذا هو الوقت المثالي أيضًا لتقديم ملاحظات للطلاب حول مشاركتهم وتعلمهم.

يمكن أن تأخذ هذه المرحلة النهائية أي شكل يراه المعلم مناسبًا لصفه. على سبيل المثال، لا يجب أن تقتصر التقييمات على اختبار أو امتحان رسمي. في الواقع، قد تكون التقييمات المختلفة أكثر فائدة في هذا السياق. السبورة التعاونية من Explain Everything هي طريقة رائعة ليكون الطلاب مبدعين ويعرضون ما تعلموه في مجموعة متنوعة من التنسيقات، بما في ذلك العروض التقديمية الفيديوية والصوتية. من خلال منحهم الحرية لتطبيق معرفتهم على شيء يمكنهم الاتصال به، تصبح المفاهيم العلمية المجردة قابلة للتطبيق ولا تُنسى.

قد تكون تستخدم بالفعل بعض المفاهيم المذكورة أعلاه في دروس العلوم الخاصة بك، لذلك نشجعك على التفكير في ما سبق والتفكير في كيفية دمج نموذج 5E بلطف في ممارستك الحالية. في الواقع، لا حاجة لبناء جميع الخطوات دفعة واحدة، يمكنك البدء صغيرًا وتوزيع المراحل على العديد من الدروس إذا لزم الأمر.`,
  },
];
const blogsJa = [
  {
    title: "教師のためのさまざまな評価のガイド",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/07/casualfilms_k12_9646_1121.jpg",
    discrible:
      "評価は教育の重要な部分です。多くの人が評価を最終的な目標と誤解していますが、さまざまな評価は学年を通じて行われるべきです。",
    content: `さまざまな評価の探求
評価は教育の重要な部分です。多くの人が評価を最終的な目標と誤解していますが、さまざまな評価は学年を通じて行われるべきです。

適切な評価は、教師が生徒の学んだことや改善が必要な分野を理解するのに役立ちます。また、生徒が自分の強みや弱みを認識するのにも役立ちます。

最も一般的な評価の種類には、診断評価、形成的評価、総括的評価の3つがあります。

診断評価
診断評価はプレテストとも呼ばれ、正式な学習が始まる前に生徒が持っている知識を確立します。教師はこの情報を使用して授業を調整し、各生徒に対して適切な注意を払うことができます。

診断評価は生徒の既存の知識、強み、弱みを理解することを目的としているため、成績には反映されません。目標は、知らないことを評価するのではなく、改善が必要な分野を認識して教育を改善することです。`,
  },
  {
    title: "教師と生徒のためのSMART目標の例",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/06/gettyimages-1291370118-1-1536x1024.jpg",
    discrible:
      "教育におけるSMART目標 ロックとラサムという著名な理論家によれば、具体的な目標を設定した生徒は、そうでない生徒よりも学校での成績が良くなります。",
    content: `教育におけるSMART目標
ロックとラサムという著名な理論家によれば、具体的な目標を設定した生徒は、そうでない生徒よりも学校での成績が良くなります。教師は、目標設定を授業に取り入れることで、生徒の成績を向上させることができます。しかし、目標が教育に役立つのはこれだけではありません。キャリア開発においても目標設定は重要であり、教師自身も目標を設定すべきです。

SMART手法は、教師と生徒が具体的で明確な目標を設定するのに役立ちます。教師はSMART目標を使用して、授業の構造を改善し、生徒の学習をサポートし、キャリアの進展を促進することができます。

SMART目標とは？
SMART目標とは、現実的に達成可能な目標を設定するための構造化されたフレームワークを持つ目標です。教育、キャリアの成長、個人の発展など、さまざまな目的でSMART目標を使用できます。

SMARTは、目標に必要な5つの要素の頭文字を取ったもので、以下のことを表します:

具体的
測定可能
達成可能
関連性
期限
S – 具体的
SMART目標は、最終的な達成内容、責任者、達成するために必要なステップを明確に定義する必要があります。

たとえば、生徒にとっての具体的なSMART目標は、「過去の間違いのためにフラッシュカードを作成し、毎週1時間復習することで、期末のスペリングテストで80％以上の点数を取ることです。」このように、どのように達成するかが明確でない「スペリングを改善する」という一般的な目標では、生徒は達成しにくいでしょう。

M – 測定可能
目標を定量化することで、達成度を客観的に測定できます。また、進捗状況を追跡するのも容易になります。

目標を測定可能にするための測定フレームワークを作成する必要があります。たとえば、教師がクラスの満足度を向上させたい場合、ベンチマークを設定しなければなりません。Explain Everythingのデジタルホワイトボードを使用して、教師は生徒にホワイトボードに描画させ、特定の活動からどれだけ学んだか、どれだけ楽しんだかを数字で書かせることができます。その後、スクリーンショットを撮り、時間をかけて平均スコアを測定します。

A – 達成可能
目標は達成可能である必要がありますが、簡単すぎることは避けるべきです。

また、自分がコントロールできることを考慮する必要があります。たとえば、「学校で一番バスケットボールが上手になる」という目標は、他の生徒の進捗をコントロールできないため、達成可能とは言えません。しかし、どれくらい練習するか、シュートの正確性をどれだけ向上させるかという目標を設定することはできます。

R – 関連性
なぜその目標を設定するのかを理解する必要があります。

たとえば、教師が特定の科目の責任者になりたい場合、知識を深め、専門スキルを向上させるためにSMART目標を設定するかもしれません。効率の改善に関連する一般的なSMART目標は、昇進が遅れている原因でない限り、関連性が低いかもしれません。

T – 期限
目標がいつ達成されるべきかを明確にする必要があります。

教育においてSMART目標を効果的に実施するために、学期や年度などの時間枠を考慮することが重要です。`,
  },
  {
    title: "アフィニティダイアグラムを使って生徒をエンパワーメントする方法",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/06/gettyimages-1021823026-1-1536x864.jpg",
    discrible:
      "アフィニティダイアグラムは、ユーザーエクスペリエンス（UX）の専門家によってよく使用されますが、教師はこれを教育環境に合わせて調整することができます。教育者は、自由な発想を促す教育ツールとしてこれを使用できます。",
    content: `教育におけるアフィニティマッピング
アフィニティマッピングは、ブレインストーミングからの思考を整理する方法です。

アフィニティダイアグラムは、ユーザーエクスペリエンス（UX）の専門家によってよく使用されますが、教師はこれを教育環境に合わせて調整することができます。教育者は、自由な発想を促す教育ツールとしてこれを使用できます。アフィニティマッピングは、ブレインストーミングの延長であり、生徒に自由に考えを探求する機会を提供します。これは、生徒にとって力強い学習体験となるでしょう。

従来、アフィニティマッピングは壁やホワイトボードに付箋を使用して行われてきました。しかし、今日の技術、例えばExplain Everythingのオンラインホワイトボードを使用することで、このプロセスをデジタル化し、新しい協力の機会を提供し、結果を保存するのが容易になります。

アフィニティダイアグラムとは何ですか？
アフィニティダイアグラムは、ブレインストーミングセッションから得られた思考を視覚的に整理する方法です。

この方法では、ブレインストーミングの結果（通常は付箋やデジタルの同等物）をグループに分けて整理します。そして、さまざまなカテゴリに名前を付けます。たとえば、生徒のグループが「良いストーリーとは何か？」というテーマでブレインストーミングを行ったとします。彼らはさまざまなポイントを出し、それを「キャラクター」、「プロット」、「執筆スタイル」などのカテゴリに分けることができます。このようにして、ブレインストーミングを通じて特定されたテーマや重要なポイントを理解することができます。

アフィニティダイアグラムは、その作成者である川喜田次郎にちなんでKJ法とも呼ばれます。KJ法では、最も重要なグループに投票し、それに応じてランク付けすることが重要です。これは、グループが焦点を当てたい、または最も重要と考えるアイデアに合意したときに使用されることがあります。しかし、教育においては必ずしも必要ではありません。たとえば、生徒があるテーマに関する知識を視覚化するためにアフィニティダイアグラムを使用している場合、グループをランク付けする必要はありません。ランク付けが不要な場合、グループ化プロセスが完了した時点でアフィニティダイアグラムを完成と見なすことができます。`,
  },
  {
    title: "メモを描く方法? ホワイトボードを使ったスケッチノート",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/03/sketchnoting-cover-1536x768.png",
    discrible:
      "オンラインでメモを描く方法は？スケッチノート、または視覚的なノート取りは、言葉と画像を組み合わせてメッセージを伝えるという二重符号化理論の教科書的な実用例です。",
    content: `メモを描く方法とスケッチノートとは？
ローデはスケッチノートを「フレーム、ディバイダー、箇条書き、アイコン、線や矢印などのコネクタのバリエーションを通じて構造を提供し、書かれた言葉と画像を組み合わせた視覚的マップ」と定義しています。つまり、これらのメモは、書かれた言葉と画像を組み合わせた視覚的マップです。

日々の教育や学習にスケッチを加えることで、取り組む教材や記憶全般の保持力を向上させることができます。スケッチノートは、従来のメモを議論、講義、得られた知識の有意義な解釈に変えることができます。

メモを描く方法とスケッチノートに関する研究と理論
『クラスルームインストラクション・ザット・ワークス』という本によると、効果的に要約するためには、学生は情報の一部を削除し、一部を置き換え、一部を保持する必要があります。これは、スケッチノートが学生の最良の友となる方法の完璧な例です。

この概念を学生に紹介し、スケッチノートを使用して教材の要約を作成できるようにします。特定のテーマに焦点を当てた短い記事を準備し、その後、生徒に学んだことを説明する視覚的なメモを作成させます。

スケッチノートのプロセス
読解を促進するテキストを提供します。
生徒に、テキストに関連しないものを削除させます。
一部の情報を置き換え、最も重要なデータと事実を保持します。
スケッチノートを使用して短い要約を作成します。
メモを描く方法は？ デジタルスケッチノートを始めるのは簡単です。
通常のスケッチノートはデジタルスケッチノートに簡単に変換できます。すべてのリソースをクラウドの1か所に保存したい場合、このシナリオはあなたにぴったりです！Explain Everything Whiteboardを使用すれば、リソースを便利に保存し、どこにいても利用することができます。

デジタルスケッチノートの基本について見てみましょう。以下の手順に従って、最初のデジタルスケッチノートを作成しましょう。そう、アプリがあります！`,
  },
  {
    title:
      "聞いたことがありますか？Explain Everything Advancedがアプリストアで利用可能になりました。",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/05/ee_advanced_cover-1536x768.png",
    discrible:
      "Explain EverythingがPrometheanと提携してから約2年が経ちました - グローバルな教育技術企業。 そして今、Explain Everythingは新しいエキサイティングな機能とExplain Everything Advancedプランでさらに良くなりました。",
    content: `また、学校や学区などの教育機関向けにカスタマイズされたExplain Everything Advancedプランも提供しており、管理ツール、LMS統合、および拡張されたコラボレーション機能へのアクセスが必要な教育者グループに最適です。

Solo Teacherプランを利用している場合 – 何が変わりましたか？
現在、Solo Teacherプラン（$34.99/年）でExplain Everythingを利用している場合、サブスクリプションを更新し、同じ価格でアプリを引き続き使用することができます。
2024年6月10日以降にサブスクリプションをキャンセルすることを選択した場合、新しいサブスクリプションをExplain Everything Advancedプランでしか開始できなくなります。

Solo Teacherプランをキャンセルする際、アプリは新しいExplain Everything Advancedプランの購入オプションを提示します。そのため、Solo Teacherプランに満足している場合は、サブスクリプションを更新するだけです。

個人プラン/プロプランを利用している場合 – プランに変更はありましたか？
いいえ、個人プランまたはプロプランのユーザーであれば、サブスクリプションの価格は同じままです。ただし、追加のボーナスがあります - アプリにはPrometheanのPolling、Timer、Spinnerが追加されます。`,
  },
  {
    title: "オンラインホワイトボードでエコマップを作成する方法",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/05/aplx_ee_advanced_uk_secondary_0424v1.png",
    discrible:
      "エコマップは、教師が生徒にとって重要な人物を視覚化するのに役立つ素晴らしいツールです。ジェノグラムとは異なり、エコマップは子供や若者の個人的なネットワークを視覚化するものです。これには、家族だけでなく、友人や隣人、さらには学校のスタッフも含まれます。",
    content: `エコマップとは何ですか？
エコマップは、教師が生徒にとって重要な人物を視覚化するのに役立つ素晴らしいツールです。ジェノグラムとは異なり、エコマップは子供や若者の個人的なネットワークを視覚化するものです。これには、家族だけでなく、友人や隣人、さらには学校のスタッフも含まれます。

実際には、エコマップは従来のマインドマップやスパイダーダイアグラムに似ています。エコマップの中心には、マップを作成している生徒の名前があります。その後、彼らにとって最も重要な人物や場所を書き出すよう指示します。この活動を構造化して生産的に保つために、エコマップを事前に設計し、それをクラスに共有することができます。また、自分自身でエコマップを作成し、クラスに例として表示することも役立ちます。

生徒とエコマップを作成することで、彼らの生活の背景に関する独自の視点を提供し、他の生徒が共通の興味を見つけるのに役立ちます。エコマップは、新しい生徒や学年の初めに自己紹介として特に役立ちます。

エコマップの利点
エコマップを教室で作成する利点は、上記のものに加えて多数あります。エコマップは:

伝統的に控えめな生徒を理解し、つながるための素晴らしい方法です。これは、大規模なクラスでは、生徒が完全に自分を表現するためのスペースを見つけるのが難しい場合に特に当てはまります。
非常に魅力的で、作成が簡単です。デジタルホワイトボードやタブレットなどのデジタル技術を使用して学び、クラスに貢献している場合、エコマップは授業間の空き時間を埋めるのに最適な活動です。
生徒中心の学習活動として最適です。エコマップを作成する生徒が共有する情報の中心に置かれ（エコマップの中心には常に自分がいる）、興味を表現する機会を提供します。
集中的な学習から休憩を提供し、構造化されたクリエイティブなタスクに集中する素晴らしい活動です。今日の教育において社会的・感情的な活動の重要性を考えると、エコマップは年上の生徒にとってSELの素晴らしい導入となります。`,
  },
  {
    title: "Explain Everythingの統合とアプリを一目で",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/06/explain-everything-integrations-and-apps-in-a-nutshell-1-1536x768.png",
    discrible:
      "今日は、Explain Everythingの人気のある統合と、当社の製品をサポートするLMS（学習管理システム）について見ていきましょう！",
    content: `Google Classroom
Google Classroomは、エドテック分野で最も人気のある学習管理システム（LMS）の1つとして知られています。Explain Everythingでは、すべての教師にとって教育と学習のプロセスを簡素化することを目指しています。これを実現するために、Google Classroomと専用の統合を開発しました。

Explain Everything Whiteboardを使用すると、課題の作成が非常に簡単になります。マジックボタンを使用して、課題をGoogle Classroomに直接共有でき、大幅な時間を節約し、全体のプロセスを簡素化します。

Canvas
Canvasは、Webベースの学習管理システム（LMS）です。教育機関、教育者、生徒がオンラインコースの学習資料にアクセスし、管理するために使用されます。

Canvasには、コース作成と管理ツール、コースおよびユーザー分析と統計、内部通信ツールなど、さまざまなカスタマイズ可能なツールが含まれています。

Explain EverythingとCanvasの両方を統合する方法をご覧ください。

Moodle
Moodleは、ブレンディッドラーニング、遠隔教育、反転授業など、学校、大学、職場、その他のセクターでのオンライン学習プロジェクトに使用されます。

Explain EverythingとMoodleの両方を統合する方法をご覧ください。

Schoology
Schoologyは、教師が伝統的なタスクや創造的なタスクを作成し、割り当てることを可能にするWebベースの学習管理システム（LMS）です。最もよく使用される機能のいくつかには、課題の作成と提出、成績簿、外部コンテンツへのリンク、PDFのマークアップ、生徒の進捗レポート、メッセージングが含まれます。

Explain EverythingとSchoologyの両方を統合する方法をご覧ください。`,
  },
  {
    title: "スマートボードを使った読書と作文の指導",
    image:
      "https://explaineverything.com/wp-content/uploads/2023/04/image-15.png",
    discrible:
      "子供の学業成長の中心には、彼らのリテラシーレベルがあります。読み書きの基本的な知識を形成することは、教師ができる最も重要なことの1つです。",
    content: `子供の学業成長の中心には、彼らのリテラシーレベルがあります。読み書きの基本的な知識を形成することは、教師ができる最も重要なことの1つです。しかし、最初に読むことと書くことを学ぶのがどれほど難しいかを忘れがちです。結局のところ、教師はその過程で多くの時間を費やして訓練し、キャリアを積んでいます。

数学や科学とは異なり、読み書きのプロセスを明確で論理的なステップに分解することは必ずしも簡単ではありません。多くの教育者は、読み書きを早期に宿題として割り当てる罠に陥ります。優れたリテラシースキルは教室で育まれ、これらの基本的なスキルを教えるために教育者が使用できるいくつかの戦略があります。

スマートボード/デジタルホワイトボードを使った読書と作文の指導のための5つの戦略
デジタルホワイトボードの導入により、読み書きを学ぶことを魅力的で面白いものにすることがこれまでになく簡単になりました。以下に、スマートボードを使用して読書と作文の授業を強化し、指導するための5つの戦略を提案します。ただし、以下で議論するアイデアの多くは、これを持たない教室でも適用できます。

1. フォネムとフォニックスについて考える
アルファベット言語を話される音とその音の間の関係を通じて読むことと書くことを理解することは、リテラシー教育の基本的な構成要素の1つです。話すことは常に読むことの前に来るため、教室での音韻意識は重要です。デジタルホワイトボードを使用すると、生徒の音韻意識を高め、重要なフォニックススキルを教えるインタラクティブなゲームを簡単に作成できます。

Explain Everythingのクリップアートライブラリを使用すると、生徒が韻を踏む言葉を特定するのを助けるために画像ペアのセットを作成したり、始まりや終わりの音に整理する必要がある画像のセットを収集したり、特定の単語の録音を作成して教室に書いてスペルを書かせることができます。インタラクティブな教育技術は、子供たちがスペリング、接頭辞、接尾辞をより迅速かつ効率的に習得するのに役立ちます。

2. 創造的になる
創造的な文章は、生徒を執筆の練習に引き込む最良の方法の1つです。これにより、生徒は自分自身を表現し、自分の個人的な興味と執筆体験を結びつけることができるだけでなく、思考と批判的な能力を整理し、構築するのに役立ちます。教育の専門家によって指導される創造的な執筆は、生徒が語彙を拡大し、スペルの練習を行い、新しい文構造を試し、正確に文法を適用する機会を提供します。

デジタルホワイトボードを使用することで、指導された効果的な創造的な執筆のための1つの戦略は、画像、言葉、および文法記号のコレクションを表示し、これらの要素を使用して短い物語を作成するよう教室に課題を与えることです。同様に、生徒が画像、ビデオ、またはアニメーションに対して応答を書く短い創造的な執筆セッションは、授業の間を埋めるのに理想的な方法です。

読み書きはお互いを補完するものであるため、可能であれば、生徒に現在学習しているテキストについて書く機会を与えてください。

3. アクティブな語彙学習
生徒に新しい単語を受動的に学ぶのではなく、積極的に語彙を構築する機会を与えることで、彼らはより迅速に読書と執筆のスキルを向上させることができます。新しい単語やフレーズを学ぶプロセスをよりアクティブで魅力的なものにするためのさまざまな戦略があります。今日のデジタル世界では、辞書を取り出して定義を書き写す必要はありません。

今日の語彙教育の定番は、協働的な執筆です。グループや教室全体で何かを書き、教師が新しい言葉を使用するための執筆プロセスをモデル化することができます。また、スマートボードを壁画やグラフィティの壁のように使用することもできます。単語を1つの部分に投稿し、教室に同義語をもう一方に貢献させることができます。

本当にインタラクティブな語彙レッスンを行うには、生徒に見つけた新しい単語についての短いビデオを録画し、それをスマートボードでクラスに小さな映画として提示させることもできます。

4. 流暢な読書
多くの教師は、生徒が話すのと同じように読む「流暢な」読者になることを目指しています。これは、生徒がテキストを正確に、迅速に、そして表現豊かに読むことができることを意味します。これを達成する唯一の方法は、生徒に何度も読む機会を与え、流暢さがどのように聞こえるかを体験させることです。

伝統的には、教師が生徒に読み聞かせたり、生徒が順番に短い部分を読むという方法が考えられます。これも良いですが、デジタルホワイトボード技術は、これをより魅力的にするのに役立ちます。たとえば、活動として、文の強調の場所を視覚化したり、生徒が読んだパッセージを録音し、それを訂正したり、句読点のない文をいくつか提供し、句読点を使って強調を作成させたりすることができます。

5. 読解力を視覚化する
テキストを理解し、処理することは、学ぶのが難しいことがあります。テキストを再読し、反映し、注釈を付けることは、多くの生徒にとって自然にできることではなく、かなりの練習を要します。理解を教える良い方法は、図（プロットポイントやキャラクター特性のベン図など）を描き、選択されたドキュメントに簡潔なメモを付けることです。

これは、Explain Everythingの共同ホワイトボードスペースを使用して、学生自身のデバイスであろうと、教室のスマートボードであろうと、簡単に実現できます。数回のクリックで色を追加したり、図を作成することができます。`,
  },
  {
    title: "Explain Everythingを使って5E科学レッスンプランを作成する方法",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/02/making-a-5e-science-lesson-plan-with-explain-everything-1-1536x768.png",
    discrible:
      "5Eレッスンプランを使って授業を構成することの利点は、科学教師に広く知られています。",
    content: `5Eレッスンプランとは？
5Eレッスンプランは、5段階の教育モデルに基づいています。モデルの5つの「E」は、Engage（引きつける）、Explore（探求する）、Explain（説明する）、Elaborate（詳述する）、Evaluate（評価する）です。5Eレッスンプランは、学生に先に情報を与えすぎず、代わりに自分で概念に取り組み、発見する機会を与えるように設計されています。

このモデルは、1987年に生物科学カリキュラム研究（BSCS）によって最初に開発され、最初に提唱されたのはロジャー・バイビー博士です。5E教育モデルは、科学のレッスンを構成し、科学的アイデアや概念を学生が理解するのを助けるために設計されました。科学教育のために作られたにもかかわらず、この手法は他の多くの科目でも人気があります。

5E科学レッスンプランの探求
5Eモデルの目的は、学生が抽象的な科学概念を自分の経験と結びつける手段を提供することです。これは、科学の技術的な側面を教える際に特に役立ちます。また、探求型科学へのアプローチとしても知られ、5Eモデルは、好奇心、探求、および根拠に基づく説明を求める必要性を生み出すことを目指しています。

以下に、5E科学レッスンプランを示し、このモデルを完全に理解し、今日この手法を使用して科学モジュールを教えるためのテンプレートを提供します。

1. Engage（引きつける）
5E科学レッスンプランの最初のフェーズはEngage（引きつける）です。この初期段階は、学生の好奇心を引きつけるために設計されています。通常、学生がまだ解決できない質問や概念を紹介することで行われます。簡単な実験を行って、学ぶ予定の科学概念を示すこともできます。可能であれば、他のレッスンで学んだ概念を構築し、学生の頭の中で意味を持たせるようにします。

Engageフェーズでは、授業をできるだけインタラクティブにすることが重要です。Explain Everythingの共同ホワイトボードを使用すると、さまざまなメディア形式を1か所に集めるのが簡単になり、画像、ビデオ、アニメーションの間をスムーズに切り替えることができます。また、ワークシートの写真をアップロードし、進行に応じてすべてに注釈を付けることができます。

さらに、Engageフェーズを延長し、宿題としてクラスに割り当てることもできます。

2. Explore（探求する）
2番目のフェーズであるExplore（探求する）は、探求活動を使用して学生が積極的に学んでいることを観察し、教材について批判的に考え、Engageフェーズからの概念を結びつけることを可能にします。学生に、すでに知っていることや、何を発見しようとしているのか、解決しようとしている問題について考えさせるよう奨励します。

これには、さまざまな自然物の分類演習、グループとしての実験室調査、またはラベルを付けようとするインタラクティブな3Dモデルのいずれかの形式が考えられます。Explain Everythingの3Dモデル適応ソフトウェアを使用すると、原子、大きさが相対的な哺乳類や恐竜、または典型的なジェットコースターがどのように重力だけで動かされるかなど、大きな概念を現実のものにするのが簡単になります。

3. Explain（説明する）
レッスンプランの第3フェーズであるExplain（説明する）は、教師が前のフェーズからの概念を説明し、生徒が自分の発見を定義し理解するように導く場所です。科学の授業では、このレッスンプランの部分は、Exploreフェーズで生徒が発見したことの簡単な発表から始まり、その後、教師からの追加の質問や指示が続くことがあります。追加の質問や指示は、教えられる主要な概念についてのより深い議論への橋渡しとして使用できます。

この段階で、マルチメディアプレゼンテーションや動的なスライドショーを共同ホワイトボードに表示することで、生徒の関心を引きつけ、説明を強化することができます。

4. Elaborate（詳述する）
Elaborateフェーズでは、学生は前のフェーズで理解したことを新しい文脈で問題を解決することによって応用するよう招待されます。これをクラス内で行うことも、宿題として個人またはグループで割り当てることもできます。また、この段階を使用して、テーマを実際の世界や個人の経験と結びつけることで、クラスの理解を深めることができます。

これには、学生が学んだことの例を調査しなければならない共同プロジェクトベースの活動の形式をとることも、最近発見された概念に関するインタラクティブなクイズの形式をとることもできます。Explain Everythingの共同ホワイトボードを使用すると、他のデバイスに放送し、デジタル課題を保存および編集する能力があり、5Eレッスンプランの第4段階が簡単かつ効率的に実行できます。

5. Evaluate（評価する）
最終段階では、生徒は前の段階から科学的概念の習得を示します。また、教師が生徒の理解度を評価し、レッスンの目標が達成されたかどうかを確認する場所でもあります。また、生徒の取り組みや学習に関するフィードバックを提供するのに最適な時期でもあります。

この最終段階は、教師がクラスに最適と見なす形式で行うことができます。たとえば、評価をクイズや正式なテストに限定する必要はありません。実際、この文脈では、複数の異なる評価がより有益であるかもしれません。Explain Everythingの共同ホワイトボードは、生徒がクリエイティブになり、学んだことをビデオやオーディオプレゼンテーションなど、さまざまな形式で表示するための優れた方法です。彼らが自分と関連付けることができるものに知識を適用する自由を与えることによって、抽象的な科学概念が理解しやすく、記憶に残るものになります。

すでにいくつかの概念を科学の授業で使用しているかもしれないので、上記を考慮し、現在の実践に5Eモデルを穏やかに統合する方法を考えてみることをお勧めします。実際、すべてのステップを一度に構築する必要はなく、必要に応じてフェーズを複数のレッスンに分散させることができます。`,
  },
];
const blogsKo = [
  {
    title: "교사를 위한 다양한 평가 유형 가이드",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/07/casualfilms_k12_9646_1121.jpg",
    discrible:
      "평가는 교육의 필수적인 부분입니다. 많은 사람들이 평가가 항상 최종 목표라고 잘못 생각하지만, 학년 동안 다양한 평가가 진행될 수 있으며, 진행되어야 합니다.",
    content: `다양한 평가 유형 탐색
평가는 교육의 필수적인 부분입니다. 많은 사람들이 평가가 항상 최종 목표라고 잘못 생각하지만, 학년 동안 다양한 평가가 진행될 수 있으며, 진행되어야 합니다.

올바른 평가 유형은 교사가 학생들이 무엇을 배웠는지, 개선이 필요한 영역을 이해하는 데 도움이 됩니다. 또한 학생들이 자신의 강점과 약점을 더 잘 인식할 수 있도록 돕습니다.

가장 일반적인 평가 유형 중 세 가지는 진단 평가, 형성 평가 및 총괄 평가입니다.

진단 평가
진단 평가는 사전 시험으로도 알려져 있으며, 정식 학습이 시작되기 전에 학생이 가지고 있는 지식을 확인합니다. 교사는 이 정보를 사용하여 수업을 조정하고 각 학생에게 적절한 주의를 기울일 수 있습니다.

진단 평가는 학생의 기존 지식, 강점 및 약점을 이해하는 것을 목표로 하기 때문에 성적에 반영되지 않습니다. 목표는 학생이 모르는 것에 대해 평가하는 것이 아니라, 개선이 필요한 영역을 인식하여 교육을 개선하는 것입니다.`,
  },
  {
    title: "교사와 학생을 위한 SMART 목표의 예시",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/06/gettyimages-1291370118-1-1536x1024.jpg",
    discrible:
      "교육에서의 SMART 목표 유명한 이론가인 로크와 라탐에 따르면, 구체적인 목표를 설정한 학생들이 그렇지 않은 학생들보다 학교에서 더 나은 성과를 거둔다고 합니다.",
    content: `교육에서의 SMART 목표
유명한 이론가인 로크와 라탐에 따르면, 구체적인 목표를 설정한 학생들이 그렇지 않은 학생들보다 학교에서 더 나은 성과를 거둔다고 합니다. 교사는 목표 설정을 교실에 통합함으로써 학생들의 성과를 향상시킬 수 있습니다. 그러나 목표는 교육에만 유용한 것이 아닙니다. 경력 개발에서도 목표 설정은 중요하므로 교사도 자신을 위한 목표를 설정해야 합니다.

SMART 방법론은 교사와 학생이 명확하고 구체적인 목표를 설정하는 데 도움이 됩니다. 교사는 SMART 목표를 사용하여 수업 구조를 개선하고, 학생들의 교육을 지원하며, 경력 발전을 촉진할 수 있습니다.

SMART 목표란 무엇인가요?
SMART 목표는 더 현실적으로 달성할 수 있도록 하는 구조화된 프레임워크를 가진 목표입니다. 사람들은 SMART 목표를 교육, 경력 성장, 개인 개발 등 다양한 목적으로 사용할 수 있습니다.

SMART는 목표에 필요한 다섯 가지 요소를 나타내는 약어입니다:

구체적
측정 가능
달성 가능
관련성
시간 제한
S – 구체적
SMART 목표는 최종 성과, 책임자, 목표 달성을 위한 단계가 명확히 정의되어야 합니다.

예를 들어, 학생에게 구체적인 SMART 목표는 "과거 실수를 수정하기 위해 플래시카드를 만들고 매주 1시간씩 복습하여 기말 스펠링 테스트에서 80% 이상의 점수를 얻겠습니다."와 같습니다. "스펠링을 개선하겠다"는 것처럼 어떻게 목표를 달성할지 불분명한 일반적인 목표는 달성하기 어려울 수 있습니다.

M – 측정 가능
목표를 수량화함으로써 성취도를 객관적으로 측정할 수 있습니다. 또한 진행 상황을 추적하는 것이 더 쉬워집니다.

목표를 측정 가능하게 만들기 위해 측정 프레임워크를 만들어야 합니다. 따라서 교사가 교실 만족도를 향상시키고자 한다면, 기준점을 설정해야 합니다. Explain Everything의 디지털 화이트보드를 사용하여 교사는 학생들에게 특정 활동에서 얼마나 많이 배웠는지 또는 즐겼는지를 숫자로 나타내도록 요청할 수 있습니다. 그런 다음 스크린샷을 찍어 시간이 지남에 따라 평균 점수를 측정할 수 있습니다.

A – 달성 가능
목표는 달성 가능해야 하지만, 너무 쉬운 것은 피해야 합니다.

또한 자신이 통제할 수 있는 것을 고려해야 합니다. 예를 들어, 학생이 "학교에서 가장 농구를 잘하는 학생이 되겠다"는 목표는 다른 학생들의 성장을 통제할 수 없기 때문에 달성 가능하지 않을 수 있습니다. 그러나 얼마나 자주 연습할지, 슛 정확도를 얼마나 개선할지에 대한 목표는 설정할 수 있습니다.

R – 관련성
왜 목표를 설정하는지 이해해야 합니다.

교사가 특정 과목의 책임자가 되기를 원한다면, 지식을 확장하고 전문성을 향상시키기 위한 SMART 목표를 설정할 수 있습니다. 일반적인 효율성 향상과 관련된 SMART 목표는 승진을 가로막는 이유가 아닌 한 덜 관련될 수 있습니다.

T – 시간 제한
목표를 언제까지 완료해야 하는지 명확히 해야 합니다.

교육에서 SMART 목표를 효과적으로 구현하려면, 학기, 학기 또는 연도와 같은 시간 프레임을 고려해야 합니다.`,
  },
  {
    title: "어피니티 다이어그램을 사용하여 학생을 강화하는 방법",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/06/gettyimages-1021823026-1-1536x864.jpg",
    discrible:
      "어피니티 다이어그램은 주로 사용자 경험(UX) 전문가들에 의해 사용되지만, 교사는 이를 교육 환경에 맞게 조정할 수 있습니다. 교육자는 이를 자유로운 사고를 촉진하는 교육 도구로 사용할 수 있으며, 심지어 복습 방법으로도 사용할 수 있습니다.",
    content: `교육에서의 어피니티 매핑
어피니티 매핑은 브레인스토밍에서 나온 생각을 정리하는 방법입니다.

어피니티 다이어그램은 주로 사용자 경험(UX) 전문가들에 의해 사용되지만, 교사는 이를 교육 환경에 맞게 조정할 수 있습니다. 교육자는 이를 자유로운 사고를 촉진하는 교육 도구로 사용할 수 있으며, 심지어 복습 방법으로도 사용할 수 있습니다. 어피니티 매핑은 브레인스토밍의 확장으로, 학생들에게 자신의 생각을 탐구할 자유를 제공합니다. 이는 학생들에게 강력한 학습 경험이 될 수 있습니다.

어피니티 매핑은 전통적으로 벽이나 화이트보드에 포스트잇을 사용하여 이루어졌습니다. 그러나 오늘날의 기술, 예를 들어 Explain Everything의 온라인 화이트보드를 사용하면 이 과정을 디지털화할 수 있으며, 새로운 협업 기회를 제공하고 결과를 쉽게 저장할 수 있습니다.

어피니티 다이어그램이란 무엇인가요?
어피니티 다이어그램은 브레인스토밍 세션에서 나온 생각을 시각적으로 정리하는 방법입니다.

이 방법은 참가자들이 브레인스토밍 결과(보통 포스트잇이나 디지털로) 를 그룹으로 나누어 정리하는 방식입니다. 그런 다음, 다양한 카테고리에 이름을 붙입니다. 예를 들어, 학생들이 "좋은 이야기의 요소는 무엇인가?"라는 주제로 브레인스토밍을 했다고 가정해 보겠습니다. 그들은 다양한 의견을 제시하고, 이를 "캐릭터", "플롯", "작문 스타일"과 같은 카테고리로 그룹화할 수 있습니다. 이 방식으로 브레인스토밍을 통해 식별된 주제와 주요 포인트를 이해할 수 있습니다.

어피니티 다이어그램은 창시자인 가와키타 지로(KJ)에서 이름을 딴 KJ 기법으로도 알려져 있습니다. KJ 방법에서는 가장 중요한 그룹에 투표하고 그에 따라 순위를 매기는 것이 중요합니다. 이는 그룹이 초점을 맞추고 싶거나 가장 중요하다고 생각하는 아이디어에 동의했을 때 사용될 수 있습니다. 그러나 교육에서는 항상 필요하지 않을 수 있습니다. 예를 들어, 학생들이 어떤 주제에 대한 지식을 시각화하는 방법으로 어피니티 다이어그램을 사용하고 있는 경우, 그룹을 순위 매기는 것이 적절하지 않을 수 있습니다. 순위 매김이 필요하지 않은 경우, 그룹화 프로세스가 완료된 시점에서 어피니티 다이어그램을 완성된 것으로 간주할 수 있습니다.`,
  },
  {
    title: "메모를 그리는 방법? 화이트보드를 사용한 스케치노트",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/03/sketchnoting-cover-1536x768.png",
    discrible:
      "온라인에서 메모를 그리는 방법은? 스케치노트, 또는 시각적 노트 테이킹은 이중 부호화 이론의 실용적인 예로, 단어와 이미지를 결합하여 메시지를 전달합니다.",
    content: `메모를 그리는 방법과 스케치노트란 무엇인가요?
로데(Rohde)는 스케치노트를 "프레임, 디바이더, 불릿, 아이콘, 선 및 화살표와 같은 연결자를 통해 구조를 제공하면서 단어와 이미지를 결합한 시각적 맵"으로 정의합니다. 기본적으로 이 유형의 메모는 단어와 이미지를 결합한 시각적 맵입니다.

일상적인 교육과 학습에 스케치를 추가하면, 다루는 자료에 대한 기억력을 향상시키고, 전반적인 기억력을 향상시킬 수 있습니다. 스케치노트는 전통적인 메모를 토론, 강의 및 얻은 지식의 의미 있는 해석으로 바꿀 수 있습니다.

메모를 그리는 방법과 스케치노트에 대한 연구와 이론
"Classroom Instruction that Works"라는 책에 따르면, 효과적으로 요약하려면 학생들이 일부 정보를 삭제하고, 일부 정보를 대체하며, 일부 정보를 유지해야 한다고 합니다. 이것은 스케치노트가 학생들에게 가장 유용한 도구가 될 수 있는 방법의 완벽한 예입니다.

이 개념을 학생들에게 소개하여, 스케치노트를 사용하여 자료의 요약을 만들 수 있도록 하세요. 특정 주제에 초점을 맞춘 짧은 기사를 준비한 다음, 학생들에게 배운 내용을 설명하는 시각적 메모를 만들도록 하세요.

스케치노트 프로세스
독해를 촉진하는 텍스트를 제공합니다.
학생들에게 텍스트와 관련이 없는 항목을 삭제하도록 요청합니다.
일부 정보를 대체하고, 가장 중요한 데이터와 사실을 유지합니다.
스케치노트를 사용하여 짧은 요약을 만듭니다.
메모를 그리는 방법은? 디지털 스케치노트를 시작하는 것은 쉽습니다.
기존의 스케치노트는 쉽게 디지털 스케치노트로 전환할 수 있습니다. 모든 리소스를 클라우드의 한 곳에 저장하고 싶다면, 이 시나리오가 당신에게 적합합니다! Explain Everything Whiteboard를 사용하면, 모든 자료를 편리하게 저장하고, 어디에서나 사용할 수 있습니다.

디지털 스케치노트의 기본 사항을 살펴보겠습니다. 아래 단계를 따라 첫 번째 디지털 스케치노트를 만들어 보세요. 그렇습니다, 이를 위한 앱도 있습니다!`,
  },
  {
    title:
      "들어보셨나요? Explain Everything Advanced가 이제 앱 스토어에서 제공됩니다.",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/05/ee_advanced_cover-1536x768.png",
    discrible:
      "Explain Everything이 세계적인 교육 기술 회사 Promethean과 협력한 지 거의 2년이 되었습니다. 이제 Explain Everything은 새로운 기능과 Explain Everything Advanced 플랜으로 더 나아졌습니다.",
    content: `또한 학교나 학군과 같은 기관을 위한 맞춤형 Explain Everything Advanced 플랜도 제공하고 있으며, 관리 도구, LMS 통합 및 확장된 협업 기능에 대한 액세스가 필요한 교육자 그룹에게 적합합니다.

Solo Teacher 플랜을 사용 중입니다 - 어떤 변화가 있나요?
현재 Solo Teacher 플랜 ($34.99/년)에서 Explain Everything을 사용 중인 경우, 구독을 갱신하고 동일한 가격으로 앱을 계속 사용할 수 있습니다.
2024년 6월 10일 이후 구독을 취소하기로 선택한 경우, 새로운 구독은 Explain Everything Advanced 플랜으로만 시작할 수 있습니다.

Solo Teacher 플랜을 취소할 때, 앱은 새 Explain Everything Advanced 플랜을 구매할 수 있는 옵션을 제공합니다. 따라서 Solo Teacher 플랜에 만족하는 경우, 구독을 갱신하기만 하면 됩니다.

개인 / 프로 플랜을 사용 중입니다 - 그 플랜에 변화가 있나요?
아니요, 개인 플랜 또는 프로 플랜 사용자의 경우, 구독 가격은 동일하게 유지됩니다. 그러나 추가 보너스가 있습니다 - 앱에는 이제 Promethean의 Polling, Timer 및 Spinner가 추가됩니다.`,
  },
  {
    title: "온라인 화이트보드로 에코맵 만들기",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/05/aplx_ee_advanced_uk_secondary_0424v1.png",
    discrible:
      "에코맵은 교사가 학생들에게 중요한 사람들을 시각화할 수 있게 해주는 훌륭한 도구입니다. 제노그램과 달리, 에코맵은 어린이 또는 청소년의 개인 네트워크를 시각화하는 것입니다. 여기에는 가족뿐만 아니라 친구, 이웃, 심지어 학교 직원도 포함될 수 있습니다.",
    content: `에코맵이란 무엇인가요?
에코맵은 교사가 학생들에게 중요한 사람들을 시각화할 수 있게 해주는 훌륭한 도구입니다. 제노그램과 달리, 에코맵은 어린이 또는 청소년의 개인 네트워크를 시각화하는 것입니다. 여기에는 가족뿐만 아니라 친구, 이웃, 심지어 학교 직원도 포함될 수 있습니다.

실제로 에코맵은 전통적인 마인드 맵이나 스파이더 다이어그램과 유사합니다. 에코맵의 중심에는 맵을 만드는 학생의 이름이 있습니다. 그 후, 그들이 가장 중요하게 생각하는 사람들과 장소를 적도록 지시합니다. 이 활동을 구조화하고 생산적으로 유지하기 위해, 에코맵을 미리 설계한 후 교실에 디자인을 공유할 수 있습니다. 자신도 하나를 만들어 교실에 예시로 보여주는 것이 유용할 수 있습니다.

학생들과 에코맵을 개발하면, 그들의 삶의 맥락을 이해할 수 있는 독특한 창을 제공하며, 다른 학생들이 공통의 관심사를 발견할 수 있는 좋은 방법입니다. 에코맵은 특히 새 학기 시작 시 자기소개 활동으로 매우 유용합니다.

에코맵의 이점
위에서 언급한 것 외에도, 교실에서 에코맵을 만드는 데는 여러 가지 이점이 있습니다. 에코맵은:

전통적으로 더 수줍어하는 학생들을 이해하고 연결하는 좋은 방법입니다. 특히 대형 교실에서는 학생들이 자신을 충분히 표현할 수 있는 공간을 찾는 것이 어려울 수 있습니다.
매우 매력적이고 만들기 쉽습니다. 디지털 화이트보드나 태블릿과 같은 디지털 기술을 사용하여 학습하고 교실에 기여하는 경우, 에코맵은 수업 사이 시간을 채우는 데 이상적인 활동입니다.
학생 중심 학습 활동에 이상적입니다. 에코맵을 만드는 학생이 공유하는 정보의 중심에 있으며(항상 에코맵의 중심에 있음), 자신의 관심사를 표현할 수 있는 기회를 제공합니다.
집중적인 학습에서 벗어나 더 창의적이지만 구조화된 작업에 집중할 수 있는 훌륭한 활동입니다. 오늘날 교육에서 사회적 정서적 활동의 중요성을 고려할 때, 에코맵은 나이 많은 학생들을 위한 SEL(사회적 정서적 학습)로의 훌륭한 도입이 될 수 있습니다.`,
  },
  {
    title: "간단히 알아보는 Explain Everything 통합 및 앱",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/06/explain-everything-integrations-and-apps-in-a-nutshell-1-1536x768.png",
    discrible:
      "오늘은 Explain Everything의 인기 있는 통합 및 당사 제품을 지원하는 LMS(학습 관리 시스템)에 대해 알아보겠습니다!",
    content: `Google Classroom
Google Classroom은 에듀테크 분야에서 가장 인기 있는 학습 관리 시스템(LMS) 중 하나로 잘 알려져 있습니다. Explain Everything에서는 모든 교사의 교육 및 학습 과정을 간소화하는 것을 목표로 하고 있습니다. 이를 실현하기 위해 Google Classroom과 전용 통합을 개발했습니다.

Explain Everything Whiteboard를 사용하면 과제를 만드는 것이 매우 간단해집니다. 마법 버튼을 사용하면 과제를 Google Classroom에 즉시 공유할 수 있어 많은 시간을 절약하고 전체 과정을 간소화할 수 있습니다.

Canvas
Canvas는 웹 기반 학습 관리 시스템(LMS)입니다. 교육 기관, 교육자 및 학생들이 온라인 과정 학습 자료에 액세스하고 관리하는 데 사용됩니다.

Canvas에는 코스 생성 및 관리 도구, 코스 및 사용자 분석 및 통계, 내부 통신 도구 등 다양한 맞춤형 도구가 포함되어 있습니다.

Explain Everything과 Canvas를 통합하는 방법을 확인하세요.

Moodle
Moodle은 학교, 대학, 직장 및 기타 부문에서 혼합 학습, 원격 교육, 플립드 클래스룸 및 기타 온라인 학습 프로젝트에 사용됩니다.

Explain Everything과 Moodle을 통합하는 방법을 확인하세요.

Schoology
Schoology는 교사가 전통적인 과제와 창의적인 과제를 만들고 할당할 수 있는 웹 기반 학습 관리 시스템(LMS)입니다. 가장 자주 사용되는 기능에는 과제 생성 및 제출, 성적부, 외부 콘텐츠에 대한 링크, PDF 주석, 학생 진행 상황 보고서, 메시징이 포함됩니다.

Explain Everything과 Schoology를 통합하는 방법을 확인하세요.`,
  },
  {
    title: "스마트보드를 활용한 읽기 및 쓰기 교육",
    image:
      "https://explaineverything.com/wp-content/uploads/2023/04/image-15.png",
    discrible:
      "어린이의 학업 성취의 중심에는 그들의 문해력 수준이 있습니다. 읽기와 쓰기의 기본 지식을 형성하는 것은 교사가 할 수 있는 가장 중요한 일 중 하나입니다.",
    content: `어린이의 학업 성취의 중심에는 그들의 문해력 수준이 있습니다. 읽기와 쓰기의 기본 지식을 형성하는 것은 교사가 할 수 있는 가장 중요한 일 중 하나입니다. 그러나 처음으로 읽기와 쓰기를 배우는 것이 얼마나 어려운지 잊기 쉽습니다. 결국 교사들은 그 과정에서 많은 훈련과 경력을 쌓아왔습니다.

수학이나 과학과 달리, 읽기와 쓰기 과정을 명확하고 논리적인 단계로 나누는 것은 항상 쉬운 일이 아닙니다. 많은 교사들은 읽기와 쓰기를 너무 일찍 숙제로 할당하는 함정에 빠집니다. 강력한 문해력은 교실에서 형성되며, 이러한 기본적인 기술을 가르치기 위해 교사가 사용할 수 있는 여러 전략이 있습니다.

스마트보드/디지털 화이트보드를 활용한 읽기 및 쓰기 교육을 위한 5가지 전략
디지털 화이트보드의 도입으로, 읽기와 쓰기를 배우는 것을 매력적이고 재미있게 만드는 것이 이제까지보다 더 쉬워졌습니다. 아래에는 스마트보드를 사용하여 읽기와 쓰기 수업을 강화하고 지도하는 데 도움이 될 5가지 전략을 제안했습니다. 그러나 아래에서 논의된 많은 아이디어는 이를 갖추지 않은 교실에서도 적용할 수 있습니다.

1. 음운과 음소에 대해 생각하기
알파벳 언어를 말의 소리와 그 소리 사이의 관계를 통해 읽고 쓰는 방법을 이해하는 것은 문해력 교육의 기본 구성 요소 중 하나입니다. 말하기는 항상 읽기보다 앞서므로 교실에서 음운 인식은 필수적입니다. 디지털 화이트보드를 사용하면, 학생들의 음운 인식을 높이고 중요한 음소 기술을 가르치는 인터랙티브한 게임을 쉽게 만들 수 있습니다.

Explain Everything의 클립아트 라이브러리를 사용하면, 학생들이 라임 단어를 식별하는 데 도움이 되는 이미지 페어 세트를 만들거나, 시작음 또는 끝소리에 맞게 정리해야 하는 이미지 세트를 모으거나, 특정 단어의 녹음을 만들고 학생들에게 들은 단어를 쓰고 철자를 제시할 수 있습니다. 인터랙티브 교육 기술은 어린이들이 스펠링, 접두사 및 접미사를 더 빠르고 효율적으로 습득하는 데 도움을 줄 수 있습니다.

2. 창의적으로 접근하기
창의적인 글쓰기는 학생들이 글쓰기 연습에 몰입하는 가장 좋은 방법 중 하나입니다. 이는 학생들이 자신을 표현하고 글쓰기 경험을 개인적인 관심사와 연결할 수 있을 뿐만 아니라, 생각과 비판적 사고를 정리하고 구조화하는 데 도움을 줍니다. 교육 전문가의 지도하에 창의적인 글쓰기는 학생들에게 어휘를 확장하고 스펠링을 연습하며 새로운 문장 구조를 시도하고 문법을 정확하게 적용할 기회를 제공합니다.

디지털 화이트보드를 활용하여 창의적이고 효과적인 글쓰기를 지도하는 한 가지 전략은 이미지, 단어 및 문법 기호를 모아 화면에 표시하고, 학생들에게 이 요소들을 사용하여 짧은 이야기를 작성하도록 하는 것입니다. 마찬가지로, 학생들이 이미지, 비디오 또는 애니메이션에 대한 반응을 쓰는 짧은 창의적 글쓰기 세션은 수업 간 시간을 채우고 중요한 문해력 기술을 연습하는 이상적인 방법입니다.

읽기와 쓰기는 서로를 보완하므로, 가능하다면 학생들이 현재 공부하고 있는 텍스트에 대해 글을 쓸 기회를 제공하십시오.

3. 능동적인 어휘 학습
학생들에게 새로운 단어를 수동적으로 배우는 대신 능동적으로 어휘를 구축할 기회를 제공하면, 읽기와 쓰기 기술을 더 빨리 향상시킬 수 있습니다. 새로운 단어와 구절을 학습하는 과정을 더 능동적이고 매력적으로 만들기 위한 다양한 전략이 있습니다. 오늘날의 디지털 세상에서는 사전을 펼치고 정의를 필사할 필요가 없습니다.

오늘날 어휘 교육의 핵심은 협력적 글쓰기입니다. 그룹이나 교실 전체에서 함께 글을 쓰며, 새로운 단어를 사용하는 글쓰기 과정을 모델링할 수 있습니다. 또한, 스마트보드를 일종의 벽화나 그래피티 벽으로 활용할 수도 있습니다. 한쪽에는 단어를 게시하고, 학생들에게 반대편에 동의어를 기여하도록 요청할 수 있습니다.

정말 인터랙티브한 어휘 수업을 위해, 학생들에게 새로 발견한 단어에 대한 짧은 비디오를 녹화하고, 이를 스마트보드에 작은 영화로 제시하게 할 수도 있습니다.

4. 유창한 읽기
많은 교사들은 학생들이 말하는 것과 같은 방식으로 읽고, 읽는 것과 같은 방식으로 말하는 "유창한" 독자가 되도록 목표를 설정합니다. 이는 학생들이 텍스트를 정확하게, 빠르게, 그리고 표현력 있게 읽을 수 있다는 것을 의미합니다. 이를 달성하는 유일한 방법은 학생들에게 여러 번 읽을 기회를 제공하고, 유창함이 어떻게 들리는지 체험하게 하는 것입니다.

전통적으로는 교사가 학생들에게 책을 읽어주거나, 학생들이 번갈아가며 짧은 구절을 읽는 방법이 있습니다. 이 방법도 좋지만, 디지털 화이트보드 기술은 이를 더 매력적으로 만드는 데 도움이 됩니다. 예를 들어, 활동으로 문장에서 강조해야 할 부분을 시각화하거나, 학생들이 구절을 읽고 이를 녹음한 후 수정하는 것, 또는 구두점을 제거한 몇 가지 문장을 제공하고, 구두점을 사용해 강조를 만드는 것 등이 있습니다.

5. 독해력 시각화
텍스트를 이해하고 처리하는 것은 배우기 어려울 수 있습니다. 텍스트를 다시 읽고, 반성하고, 주석을 다는 것은 대부분의 학생들에게 자연스럽게 오는 것이 아니며, 많은 연습이 필요합니다. 독해력을 가르치는 좋은 방법은 도표(예: 플롯 포인트나 캐릭터 특성의 벤 다이어그램)를 그리고, 선택된 문서에 간결한 메모를 다는 것입니다.

이것은 Explain Everything의 협업 화이트보드 공간을 사용하여, 학생 자신의 장치나 교실의 스마트보드에서 쉽게 수행할 수 있습니다. 색상을 추가하고, 몇 번의 클릭만으로 도표를 만들 수 있습니다.`,
  },
  {
    title: "Explain Everything을 사용한 5E 과학 수업 계획 만들기",
    image:
      "https://explaineverything.com/wp-content/uploads/2024/02/making-a-5e-science-lesson-plan-with-explain-everything-1-1536x768.png",
    discrible:
      "5E 수업 계획을 사용하여 수업을 구성하는 것의 이점은 과학 교사들 사이에서 잘 알려져 있습니다.",
    content: `5E 수업 계획이란 무엇인가요?
5E 수업 계획은 5단계 교육 모델을 기반으로 합니다. 이 모델의 5가지 "E"는 Engage(참여), Explore(탐구), Explain(설명), Elaborate(심화), Evaluate(평가)입니다. 5E 수업 계획은 학생들에게 개념에 대해 스스로 탐구하고 발견할 수 있는 기회를 제공하기 위해 설계되었습니다.

이 모델은 1987년에 생물과학 커리큘럼 연구(BSCS)에 의해 처음 개발되었으며, 로저 바이비 박사에 의해 처음 제안되었습니다. 5E 교육 모델은 과학 수업을 구성하고 학생들이 과학적 아이디어와 개념을 이해하는 데 도움을 주기 위해 설계되었습니다. 과학 교육을 위해 만들어졌지만, 이 방법론은 다른 많은 과목에서도 인기를 얻고 있습니다.

5E 과학 수업 계획 탐구
5E 모델의 목표는 학생들에게 추상적인 과학 개념을 자신들의 경험과 연결할 수 있는 방법을 제공하는 것입니다. 이는 과학의 기술적인 측면을 가르칠 때 특히 유용합니다. 또한 탐구 과학 접근법으로도 알려져 있으며, 5E 모델은 호기심, 탐구, 근거 기반 설명의 필요성을 강화하는 것을 목표로 합니다.

아래에 5E 과학 수업 계획을 제시하여 이 모델에 대한 완전한 이해를 돕고, 오늘날 이 방법론을 사용하여 과학 모듈을 가르치기 위한 템플릿을 제공합니다.

1. Engage(참여)
5E 과학 수업 계획의 첫 번째 단계는 Engage(참여)입니다. 이 초기 단계는 학생들의 호기심을 자극하기 위해 설계되었습니다. 일반적으로 학생들이 아직 해결할 수 없는 질문이나 개념을 도입함으로써 이루어집니다. 학습할 예정인 과학 개념을 보여주기 위해 간단한 실험을 수행할 수도 있습니다. 가능하다면, 다른 수업에서 배운 개념을 구축하여 학생들의 마음에 의미를 부여하도록 합니다.

Engage 단계에서는 수업을 가능한 한 상호작용적으로 만드는 것이 중요합니다. Explain Everything의 협업 화이트보드를 사용하면 다양한 미디어 형식을 한곳에 모으는 것이 쉬워지고, 이미지, 비디오, 애니메이션 간을 매끄럽게 전환할 수 있습니다. 또한, 워크시트 사진을 업로드하고, 진행 상황에 따라 모든 것에 주석을 달 수 있습니다.

Engage 단계를 확장하여 숙제로 지정할 수도 있습니다.

2. Explore(탐구)
두 번째 단계인 Explore(탐구)는 탐구 활동을 사용하여 학생들이 학습 중인 내용을 적극적으로 관찰하고, 자료에 대해 비판적으로 사고하며, Engage 단계에서의 개념을 연결할 수 있도록 합니다. 학생들에게 이미 알고 있는 것과 발견하려고 하는 것/해결하려고 하는 문제를 고려하도록 격려해야 합니다.

이 단계는 다양한 자연물의 분류 연습, 그룹으로서의 실험실 조사, 또는 라벨을 시도해야 하는 인터랙티브 3D 모델의 형식을 취할 수 있습니다. Explain Everything의 3D 모델 적응 소프트웨어를 사용하면 원자, 포유류와 공룡의 상대적 크기, 또는 전형적인 롤러코스터가 중력만으로 어떻게 움직이는지 등 큰 개념을 현실화하는 것이 쉬워집니다.

3. Explain(설명)
수업 계획의 세 번째 단계인 Explain(설명)은 교사가 이전 단계에서의 개념을 설명하고, 학생들이 자신의 발견을 정의하고 이해할 수 있도록 이끄는 단계입니다. 과학 수업에서 이 단계는 Explore 단계에서 학생들이 발견한 내용을 간략하게 발표하고, 교사의 추가 질문이나 지시가 이어지는 방식으로 시작할 수 있습니다. 추가 질문이나 지시는 가르친 주요 개념에 대한 심도 있는 토론으로 연결될 수 있습니다.

이 단계에서 멀티미디어 프레젠테이션과 다이내믹한 슬라이드 쇼를 협업 화이트보드에 표시하면 학생들의 관심을 끌고 설명을 강화하는 데 도움이 됩니다.

4. Elaborate(심화)
Elaborate 단계에서는 학생들이 이전 단계에서 이해한 것을 새로운 문맥에서 문제를 해결함으로써 적용하도록 초대됩니다. 이를 수업 내에서 수행하거나 숙제로 개별적으로 또는 그룹으로 지정할 수 있습니다. 이 단계에서 주제를 현실 세계나 개인 경험과 연결하여 학생들의 이해를 확장할 수도 있습니다.

이는 학생들이 배운 내용의 예를 조사해야 하는 협력적 프로젝트 기반 활동의 형식을 취할 수도 있고, 최근 발견된 개념에 대한 인터랙티브 퀴즈의 형식을 취할 수도 있습니다. Explain Everything의 협업 화이트보드를 사용하면 다른 장치로 방송하고, 디지털 과제를 저장하고 편집할 수 있으며, 5E 수업 계획의 네 번째 단계가 간단하고 효율적으로 진행될 수 있습니다.

5. Evaluate(평가)
마지막 단계에서는 학생들이 이전 단계에서 배운 과학적 개념을 숙달했음을 보여줍니다. 또한 교사가 학생들의 이해 수준을 평가하고, 수업 목표가 달성되었는지 확인하는 단계입니다. 이 단계는 학생들의 참여와 학습에 대한 피드백을 제공할 수 있는 완벽한 시점이기도 합니다.

이 마지막 단계는 교사가 자신의 수업에 적합하다고 생각하는 형식으로 진행할 수 있습니다. 예를 들어, 평가를 퀴즈나 공식 시험으로 제한할 필요는 없습니다. 실제로 여러 가지 평가가 더 유익할 수 있습니다. Explain Everything의 협업 화이트보드는 학생들이 창의적으로 표현하고 배운 것을 다양한 형식(비디오 및 오디오 프레젠테이션 등)으로 표시하는 훌륭한 방법입니다. 학생들이 자신과 관련이 있는 것에 지식을 적용할 수 있는 자유를 제공함으로써 추상적인 과학 개념이 이해 가능하고 기억에 남는 것이 됩니다.

이미 과학 수업에서 위에 언급된 몇 가지 개념을 사용하고 있을 수 있으므로, 현재의 실습에 5E 모델을 부드럽게 통합하는 방법을 고려해 보시기 바랍니다. 모든 단계를 한 번에 통합할 필요는 없으며, 필요에 따라 여러 수업에 단계를 나누어 적용할 수 있습니다.`,
  },
];
const blogsZh = [
  {
    "title": "教师评估类型指南",
    "image": "https://explaineverything.com/wp-content/uploads/2024/07/casualfilms_k12_9646_1121.jpg",
    "discrible": "评估是教育的一个重要部分。许多人误以为评估总是最终目标，但不同类型的评估可以而且应该在整个学年中进行。",
    "content": `探索不同类型的评估
评估是教育的一个重要部分。许多人误以为评估总是最终目标，但不同类型的评估可以而且应该在整个学年中进行。

正确的评估类型有助于教师了解学生学到了什么，以及他们需要改进的领域。它们还使学生能够更好地认识到自己的优势和弱点。

最常见的三种评估类型是诊断性评估、形成性评估和总结性评估。

诊断性评估
诊断性评估，也称为预测评估，是在正式学习开始前确定学生掌握的知识。教师可以利用这些信息相应地调整他们的课程，并为每个学生提供适当的关注。

由于诊断性评估的目的是了解学生的现有知识、优势和劣势，因此不会计入成绩。其目标是通过识别需要改进的领域来改善教学，而不是评判学生不知道的内容。`
  },
  {
    "title": "教师和学生的SMART目标示例",
    "image": "https://explaineverything.com/wp-content/uploads/2024/06/gettyimages-1291370118-1-1536x1024.jpg",
    "discrible": "教育中的SMART目标 根据著名理论家洛克和拉塔姆的说法，设定具体目标的学生在学校的表现优于没有设定目标的学生。",
    "content": `教育中的SMART目标
根据著名理论家洛克和拉塔姆的说法，设定具体目标的学生在学校的表现优于没有设定目标的学生。教师可以通过在课堂上引入目标设定来提高学生的表现。但这并不是目标在教育中的唯一作用。目标设定在职业发展中也很重要，因此教师也应该为自己设定目标。

SMART方法可以帮助教师和学生构建稳健、具体的目标。教师可以使用SMART目标和目标来改善课程结构，支持学生的教育，并促进职业发展。

什么是SMART目标？
SMART目标是具有结构化框架的目标，使其更具现实可行性。人们可以将SMART目标用于各种目的，包括教育、职业成长和个人发展。

SMART是五个关键元素的首字母缩写，目标需要满足以下条件：

具体的
可衡量的
可实现的
相关的
有时间限制的
S – 具体的
SMART目标应明确定义最终成就、负责人员以及实现目标所需的步骤。

例如，一个学生的具体SMART目标可能是：“我将通过为以往的错误制作闪卡，并每周复习一小时，在期末拼写测试中取得80%以上的分数。”相反，如果目标是“我将提高拼写”，因为不知道该如何实现，学生可能很难实现这一目标。

M – 可衡量的
通过量化目标，可以客观地衡量成就。这也更容易跟踪进展。

应创建一个衡量框架，使目标可衡量。因此，如果教师希望提高课堂满意度，则必须设定一个基准。使用Explain Everything数字白板，教师可以邀请学生在白板上画图，并根据他们从某项活动中获得的乐趣或学习效果给出一个数字。然后，教师可以截屏并随着时间的推移测量平均分数。

A – 可实现的
目标需要是可实现的——但不能太容易。

还应考虑可以控制的因素。例如，对于一个孩子来说，“成为学校篮球最好的人”这一目标并不现实，因为他们无法控制同学的进步。然而，他们可以设定自己练习的频率和投篮准确率的提高目标。

R – 相关的
需要了解为什么要设定这个目标。

如果教师想成为学科负责人，他们可能会围绕进一步的知识提升和专业技能提升设定SMART目标。如果效率的提高并不是他们未被提拔的原因，那么与提高效率相关的SMART目标可能不太相关。

T – 有时间限制的
应明确目标需要完成的时间。

为了确保在教育中有效实施SMART目标，可以考虑使用学期、学年或年限作为时间框架。`
  },
  {
    "title": "如何使用亲和图增强学生能力",
    "image": "https://explaineverything.com/wp-content/uploads/2024/06/gettyimages-1021823026-1-1536x864.jpg",
    "discrible": "亲和图通常由用户体验（UX）专业人员使用，但教师可以将其调整为适合教育环境。教育者可以将其作为一种鼓励自由思考的教学工具使用，它甚至可以作为复习方法。",
    "content": `教育中的亲和图
亲和图是一种将头脑风暴的想法进行组织的方法。

亲和图通常由用户体验（UX）专业人员使用，但教师可以将其调整为适合教育环境。教育者可以将其作为一种鼓励自由思考的教学工具使用，它甚至可以作为复习方法。由于亲和图是头脑风暴的延伸，它为学生提供了探索自己思想的自由。这可以成为一种增强学习体验。

传统上，亲和图使用便签贴在墙上或白板上完成。但随着今日科技的发展，例如Explain Everything的在线白板，可以将这一过程数字化——这为合作提供了新的机会，并使保存结果变得更加容易。

什么是亲和图？
亲和图，也称为亲和图表或亲和图谱，是一种将头脑风暴的结果进行可视化组织的方法。

它的工作方式是参与者将他们的头脑风暴成果（通常是便签或数字等效物）分组整理。然后，他们为不同的类别命名。例如，一组学生可能会围绕“好故事的要素是什么？”这个主题进行头脑风暴。他们可能会提出各种观点，然后将其分组为“角色”、“情节”和“写作风格”等类别。通过这种方式，他们可以从头脑风暴中理解所识别的主题和特定要点。

亲和图也被称为KJ法，以其创建者川喜田二郎（Jiro Kawakita）的名字命名。在KJ方法中，至关重要的是要对最重要的组进行投票并相应地排名。这可以在一组人就他们想要关注或认为最重要的想法达成共识时使用。然而，这并不总是在教育中适用。例如，如果学生使用亲和图来可视化他们对某一主题的知识，而不是对他们想要改变的事物提出建议，那么对组进行排名是不合适的。如果不需要排名，您可以在分组过程完成后认为亲和图已完成。`
  },
  {
    "title": "如何绘制笔记？使用白板进行速记笔记",
    "image": "https://explaineverything.com/wp-content/uploads/2024/03/sketchnoting-cover-1536x768.png",
    "discrible": "如何在线绘制笔记？速记笔记或视觉笔记是所谓的双重编码理论的教科书实践应用，因为它结合了文字和图像来传达信息。",
    "content": `如何绘制笔记，什么是速记笔记？
罗德（Rohde）将速记笔记定义为“通过框架、分隔符、符号、图标以及连接线和箭头的变体提供结构，同时结合书写的文字和图像的视觉地图”。简而言之，这些类型的笔记是结合了文字和图像的视觉地图。

将速写添加到日常教学和学习中，可以帮助您提高对所使用材料的保留率，并更广泛地提高记忆力。速记笔记可以将传统笔记转化为对讨论、讲座和所获得知识的有意义的解释。

速记笔记的研究与理论
根据《有效课堂教学》一书，学生在有效总结时需要删除部分信息，替换部分信息并保留部分信息。这是速记笔记如何成为学生最佳朋友的一个完美例子。

向您的学生介绍这个概念，以便他们可以开始使用速记笔记来总结材料。准备一篇简短的文章，专注于一个特定的主题。然后，让您的学生创建一个描述他们所学内容的视觉笔记。

速记笔记的过程
提供一篇旨在提高阅读理解的文本。
要求您的学生删除与文本无关的内容。
替换某些内容，但保留最重要的数据和事实。
使用速记笔记创建一个简短的总结。
如何绘制笔记？开始使用数字速记笔记很容易。
常规的速记笔记可以轻松转化为数字速记笔记。如果您想将所有资源保存在云端的一个地方，那么这个场景非常适合您！Explain Everything Whiteboard允许您方便地存储所有材料，并在任何地方使用它们。

让我们来看看数字速记笔记的基础知识。按照以下步骤创建您的第一个数字速记笔记。是的，有一个应用程序可以做到！`
  },
  {
    "title": "您听说过吗？Explain Everything Advanced现已在应用商店上线。",
    "image": "https://explaineverything.com/wp-content/uploads/2024/05/ee_advanced_cover-1536x768.png",
    "discrible": "自Explain Everything与全球领先的教育技术公司Promethean合作已有近两年时间。现在，Explain Everything更强大，拥有令人兴奋的新功能和Explain Everything Advanced计划。",
    "content": `我们还为学校和学区等机构提供定制的Explain Everything Advanced计划，非常适合需要访问管理工具、LMS集成和扩展协作功能的教育工作者群体。

我正在使用Solo Teacher计划——有什么变化吗？
如果您目前正在使用Solo Teacher计划（每年$34.99）上的Explain Everything，您可以续订订阅，并以相同的价格继续使用该应用程序。
如果您选择在2024年6月10日之后取消订阅，您只能通过Explain Everything Advanced计划开始新的订阅。

取消Solo Teacher计划时，应用程序会为您提供购买新的Explain Everything Advanced计划的选项。因此，如果您对Solo Teacher计划满意，只需续订订阅即可。

我正在使用个人/专业计划——该计划有变化吗？
没有，如果您是个人计划或专业计划的用户，您的订阅价格保持不变。但是，您将获得一个额外的奖励——该应用程序现在将包含Promethean的投票、计时器和旋转器。`
  },
  {
    "title": "如何使用在线白板制作生态图",
    "image": "https://explaineverything.com/wp-content/uploads/2024/05/aplx_ee_advanced_uk_secondary_0424v1.png",
    "discrible": "生态图是一种非常棒的工具，可以帮助教师可视化对学生来说重要的人物。与家谱不同，生态图可视化的是儿童或青少年的个人网络。它可以包括各种个人关系，不仅限于家庭。这包括朋友、邻居，甚至学校的工作人员。",
    "content": `什么是生态图？
生态图是一种非常棒的工具，可以帮助教师可视化对学生来说重要的人物。与家谱不同，生态图可视化的是儿童或青少年的个人网络。它可以包括各种个人关系，不仅限于家庭。这包括朋友、邻居，甚至学校的工作人员。

在实际操作中，生态图类似于传统的思维导图或蜘蛛图。生态图的中心是制作图表的学生的名字。然后，指导他们写下对他们最重要的所有人和地方。为了使这一活动结构化且富有成效，您可以预先设计一个生态图，然后将设计与全班分享。自己做一个并将其展示给全班作为示例，也可能会有所帮助。

与学生一起制作生态图可以让您以独特的视角了解他们的生活背景，并且这是其他学生发现共同兴趣的好方法。对于新生或学年初期的学生来说，生态图尤其有用，可以作为破冰活动。

生态图的好处
除了上述好处外，在课堂上制作生态图还有许多好处。生态图可以：

成为了解和联系传统上较为害羞的学生的绝佳方式。在大班中，学生可能难以找到完全表达自己的空间，这一点尤其适用。
非常有吸引力且制作简单。如果您正在使用数字白板或学生正在使用如平板电脑之类的数字技术进行学习并参与课堂，生态图是填补课堂时间的极佳活动。
成为理想的以学生为中心的学习活动，因为它将制作生态图的学生置于信息的中心（他们总是生态图的中心），同时给他们机会表达自己的兴趣。
成为一种很好的活动，让学生从紧张的学习中解脱出来，专注于更具创造性但仍然结构化的任务。考虑到当今教学中社会情感活动的重要性，生态图可能是年长学生进入SEL（社会情感学习）的绝佳介绍。`
  },
  {
    "title": "一目了然的Explain Everything集成与应用程序",
    "image": "https://explaineverything.com/wp-content/uploads/2024/06/explain-everything-integrations-and-apps-in-a-nutshell-1-1536x768.png",
    "discrible": "今天，让我们来看看Explain Everything的流行集成和支持我们产品的LMS（学习管理系统）！",
    "content": `Google Classroom
Google Classroom被认为是教育技术领域最受欢迎的学习管理系统（LMS）之一。在Explain Everything，我们的目标是简化每位教师的教学和学习过程。为此，我们开发了与Google Classroom的专用集成。

使用Explain Everything Whiteboard，创建作业变得轻而易举。我们的魔法按钮允许您直接将作业分享至Google Classroom，节省了大量时间并简化了整个过程。

Canvas
Canvas是一个基于网络的学习管理系统（LMS）。教育机构、教育工作者和学生可以使用它来访问和管理在线课程的学习材料。

Canvas包括一系列可定制的课程创建和管理工具、课程和用户分析与统计以及内部通信工具。

查看如何将Explain Everything与Canvas结合使用。

Moodle
Moodle用于混合学习、远程教育、翻转课堂以及学校、大学、工作场所和其他部门的其他在线学习项目。

查看如何将Explain Everything与Moodle结合使用。

Schoology
Schoology是一个基于网络的学习管理系统（LMS），允许教师创建和分配传统任务和创造性任务。最常用的功能包括作业创建与提交、成绩簿、外部内容链接、PDF标注、学生进度报告和消息传递。

查看如何将Explain Everything与Schoology结合使用。`
  },
  {
    "title": "使用智能板教授阅读与写作",
    "image": "https://explaineverything.com/wp-content/uploads/2023/04/image-15.png",
    "discrible": "儿童学业发展的核心是他们的识字水平。建立扎实的阅读和写作基础知识是教师可以做的最重要的事情之一。",
    "content": `儿童学业发展的核心是他们的识字水平。建立扎实的阅读和写作基础知识是教师可以做的最重要的事情之一。然而，第一次学习阅读和写作的难度可能会被忽视。毕竟，教师们在训练和职业生涯中已经内化了大部分过程。

与数学或科学不同，将阅读和写作分解为清晰和逻辑的步骤并不总是容易的。许多教育者会过早地将阅读和写作作为家庭作业布置出去。扎实的识字技能是在课堂上培养的，教育者可以使用多种策略来教授这些基本技能。

使用智能板/数字白板教授阅读与写作的5种策略
随着数字白板的引入，使学习阅读和写作变得吸引人且有趣变得前所未有的简单。以下是我们建议的5种策略，这些策略将有助于使用智能板增强和指导您的阅读与写作课程。然而，下面讨论的许多想法也可以应用于没有这些工具的教室。

1. 考虑音素和语音
通过语言的语音（即音素）之间的关系来理解字母语言的阅读和写作方法是识字教学的基本组成部分之一。口语总是先于阅读，因此课堂上的语音意识是至关重要的。使用数字白板，您可以轻松创建互动游戏，以提高学生的语音意识并教授关键的语音技能。

通过Explain Everything的剪贴画库，您可以创建一组图片对，帮助学生识别押韵单词，收集一组需要根据起始音或结尾音进行分类的图片，或创建某些单词的录音，让您的课堂写下并拼写他们听到的单词。互动教学技术可以帮助孩子们更快、更有效地掌握拼写、前缀和后缀。

2. 创造性地写作
创造性写作是吸引学生写作练习的最佳方式之一。它不仅让学生有机会表达自己并将写作体验与他们的个人兴趣联系起来，还可以帮助他们组织和结构化思维和批判能力。在教育专业人员的指导下，创造性写作为学生提供了扩展词汇、练习拼写、尝试新句子结构并正确应用语法的机会。

使用数字白板进行指导和有效的创造性写作的一种策略是展示一组图片、单词和语法符号，并要求课堂用这些元素创作一个短篇故事。同样，在短暂的创造性写作环节中，让学生对图片、视频或动画进行写作回应，也是填补课堂空隙并练习重要识字技能的理想方式。

请记住，阅读和写作是相辅相成的，因此，如果可能的话，给学生机会写下他们目前正在学习的文本。

3. 积极的词汇学习
与其让学生被动学习新词汇，不如给他们机会积极构建词汇，这将使他们更快地提高阅读和写作技能。有多种策略可以使学习新词汇或短语的过程更加积极和有趣。在今天的数字化世界中，不再需要翻开字典并抄写定义。

如今词汇教学的一个重要环节是协作写作。无论是在小组还是全班范围内，您都可以一起写作，展示使用新词的写作过程。您还可以将智能板用作一种壁画或涂鸦墙。您可以在一边发布词汇，并要求全班在另一边贡献同义词。

为了进行真正互动的词汇课程，您甚至可以让学生录制一段关于他们发现的新词的短视频，然后将其作为一部小电影展示给全班。

4. 流畅阅读
许多教师的目标是让学生成为“流畅”的读者，能够以他们说话的方式阅读，并以他们阅读的方式说话。这意味着学生可以准确、快速和富有表达力地阅读文本。要做到这一点，唯一的方法是给学生多次阅读的机会，并让他们体验流畅阅读的声音。

传统上，这可能包括教师为学生朗读，或全班轮流朗读短篇文章。尽管这很好，但数字白板技术可以帮助使这更加引人入胜。例如，一项活动可能涉及可视化句子中的重点位置，录制学生朗读段落并纠正它，或者提供一些没有标点符号的句子，并让学生决定使用哪些标点符号来创建强调。

5. 可视化阅读理解
理解和处理文本可能是一项艰难的任务。重读、反思并标注文本并不是大多数学生自然具备的能力；这通常需要大量练习。教阅读理解的一个好方法是绘制图表（例如情节点或角色特征的维恩图），并在选定的文档上添加简洁的注释。

这可以使用Explain Everything的协作白板空间轻松完成，无论是在学生自己的设备上还是在课堂的智能板上。只需点击几下，您就可以添加颜色并创建图表。`
  },
  {
    "title": "使用Explain Everything制作5E科学课程计划",
    "image": "https://explaineverything.com/wp-content/uploads/2024/02/making-a-5e-science-lesson-plan-with-explain-everything-1-1536x768.png",
    "discrible": "使用5E课程计划结构课堂的好处在科学教师中广为人知。",
    "content": `什么是5E课程计划？
5E课程计划基于五阶段教学模型。模型的五个“E”分别是：参与（Engage）、探索（Explore）、解释（Explain）、拓展（Elaborate）和评估（Evaluate）。通过设计，5E课程计划将避免学生被过多的信息淹没，而是让他们自己接触并发现概念。

该模型最初由生物科学课程研究（BSCS）于1987年开发，由罗杰·拜比博士首次提出。5E教学模型旨在通过结构化的科学课程，增强学生对科学概念的理解。尽管它最初是为科学教育设计的，但如今它已成为其他学科中广受欢迎的方法。

探索5E科学课程计划
5E模型的目的是为学生提供将抽象的科学概念与他们自己的经验联系起来的途径，这在教授科学的技术方面时特别有用。5E模型被视为探究科学的方法，旨在激发好奇心、探索精神以及基于证据的解释需求。

下面，我们为您提供了一个5E科学课程计划，帮助您全面了解该模型，并为您提供一个模板，供您今天使用该方法教学科学模块。

1. 参与（Engage）
5E科学课程计划的第一个阶段是参与（Engage）。这个初始阶段旨在激发学生的好奇心，通常通过引入一个学生无法（尚未）解决的问题或概念来进行。您甚至可以进行一个简单的实验来展示他们将要学习的科学概念。如果可能，请尝试利用以前课程中学习的概念，在学生的头脑中建立意义。

在参与阶段，尽量使您的教学互动化。使用Explain Everything的协作白板，可以轻松地将不同的媒体形式汇集在一个地方，从而能够在图像、视频和动画之间无缝切换。您还可以上传工作表的照片并随时添加注释。

您还可以通过将参与阶段作为家庭作业布置来延长这一阶段。

2. 探索（Explore）
第二阶段，探索（Explore），利用探究活动让学生主动观察他们正在学习的内容，批判性地思考材料，并将参与阶段的概念联系起来。您应鼓励学生思考他们已经知道的内容以及他们想要发现的内容/他们正在解决的问题是什么。

这可以采取不同自然物分类练习的形式，或作为小组进行的实验室调查，甚至是学生尝试标记的互动3D模型。使用Explain Everything的3D模型适配软件，可以轻松将大型概念生动化，例如原子、哺乳动物和恐龙的相对大小，甚至是典型过山车如何仅通过重力驱动。

3. 解释（Explain）
课程计划的第三阶段，解释（Explain），是教师解释前一阶段的概念并指导学生定义和理解他们的发现的地方。在科学课中，这一阶段可能以学生展示他们在探索阶段的发现为开端，随后是教师提出的额外问题或提示。这些问题和提示可以用来引导关于所教的关键概念的更深入讨论。

在这一阶段，通过在协作白板上显示多媒体演示和动态幻灯片，可以帮助吸引学生注意并强化解释。

4. 拓展（Elaborate）
在拓展阶段，学生被邀请通过在新的环境中解决问题来应用他们从前几个阶段中学到的知识。这可以在课堂上完成，也可以作为家庭作业布置给小组或个人。您还可以利用这一阶段，通过将主题与现实世界或学生的个人经历联系起来，来拓展他们对主题的理解。

这可以采取协作项目活动的形式，学生必须研究他们学到的知识的实际应用，或者通过最近学到的概念进行互动测验。使用Explain Everything的协作白板，能够轻松广播到其他设备、存储和编辑数字作业，使5E课程计划的第四阶段简单高效地进行。

5. 评估（Evaluate）
在最后阶段，学生展示他们对前几个阶段学习到的科学概念的掌握程度。这也是教师评估学生理解水平的地方，并确定课程目标是否达成。这也是向学生提供关于他们参与和学习反馈的理想时机。

教师可以根据课堂需要选择合适的评估形式。例如，您不必将评估限制为测验或正式测试。事实上，在这一上下文中，采用多种评估形式可能更为有益。Explain Everything的协作白板提供了多种展示学生所学知识的创意形式，包括视频和音频演示。通过让学生自由将他们的知识应用于与自己相关的事物，抽象的科学概念变得更容易理解和记住。

您可能已经在科学课程中使用了一些上述概念，因此我们鼓励您反思以上内容，并考虑如何将5E模型温和地整合到您当前的教学实践中。实际上，您不需要一次性实施所有步骤，如果需要，可以将这些阶段分散到多个课程中进行。`
  }
];

app.get("/blogs-multi-language", (req, res) => {
  res.status(200).json({
    message: "Get blogs successfully",
    data: {
      en: blogsEn,
      vi: blogsVi,
      ar: blogsAr,
      ja: blogsJa,
      ko: blogsKo,
      zh: blogsZh,
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
