const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/blogs', (req, res) => {
    res.status(200).json({
        message : 'Get blogs successfully',
        data :[
            {
                'title' : 'A teacher’s guide to different types of assessments',
                'image' : 'https://explaineverything.com/wp-content/uploads/2024/07/casualfilms_k12_9646_1121.jpg',
                'discrible' : 'Assessments are an essential part of education. While many people have a misconception that an assessment is always the final goal, different types of assessments can – and should – take place throughout the academic year. ',
                'content' : `Exploring different assessment types
Assessments are an essential part of education. While many people have a misconception that an assessment is always the final goal, different types of assessments can – and should – take place throughout the academic year. 

The right type of assessment helps teachers understand what their students have learned and the areas they need to improve on. They also enable students to better recognize their strengths and weaknesses, too.

Three of the most common assessment types are diagnostic, formative, and summative.

Diagnostic assessment
Also known as a pre-test, a diagnostic assessment establishes what knowledge a student possesses before formal learning begins. Teachers can then use this information to alter their lessons accordingly and tailor the amount of attention each pupil receives. 

Because a diagnostic assessment aims to understand students’ existing knowledge, strengths, and weaknesses, it will not count toward grades. The goal is to improve teaching by recognizing areas that need improvement; it’s never to judge students for what they do not know.`
            },
            {
                'title' : 'Examples of SMART goals and objectives or teachers and students',
                'image' : 'https://explaineverything.com/wp-content/uploads/2024/06/gettyimages-1291370118-1-1536x1024.jpg',
                'discrible' : 'SMART goals in education According to leading theorists Locke and Latham, students who set specific goals perform better at school than those who do not. Teachers can enhance their pupils’',
                'content' : `SMART goals in education
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
                'title' : 'How to use affinity diagrams to empower students',
                'image' : 'https://explaineverything.com/wp-content/uploads/2024/06/gettyimages-1021823026-1-1536x864.jpg',
                'discrible' : 'While affinity diagrams are perhaps most used by user experience (UX) professionals, teachers can adapt the process to suit educational settings. Educators can use it as a teaching tool to encourage free thinking; it even has its place as a revision method.',
                'content' : `Affinity mapping in education
Affinity mapping is a way of organizing thoughts from brainstorming. 

While affinity diagrams are perhaps most used by user experience (UX) professionals, teachers can adapt the process to suit educational settings. Educators can use it as a teaching tool to encourage free thinking; it even has its place as a revision method. Because affinity mapping is an extension of brainstorming, it gives pupils the freedom to explore their thoughts. This can be an empowering learning experience. 

Affinity mapping has traditionally been completed with sticky notes on walls or whiteboards. But with today’s technology, such as Explain Everything’s online whiteboard, you can digitize the process – introducing new opportunities for collaboration and making it easier to save findings. 

What is an affinity diagram?
An affinity diagram, also known as an affinity chart or affinity map, is a visual method of organizing thoughts from a brainstorming session. 

It works by the participants organizing their brainstorming findings (usually on sticky notes or a digitalized equivalent) into groups. They then give a name to the different categories. For example, a group of students may brainstorm the topic “What makes a good story?”. They may come up with varied points and could then group these into categories like “Characters”, “Plot”, and “Writing style”. From this view, they can then understand the themes they’ve identified through brainstorming and specific callouts.

Affinity diagrams are also known as the KJ Technique, named after its creator, Jiro Kawakita. With the KJ Method, it’s crucial to vote for the most important groups and rank them accordingly. This can be used when a group agrees on an idea that they want to focus on or consider the most important. However, it will not always have its place in education. For example, suppose students are using affinity diagrams as a way of visualizing their knowledge of a subject rather than suggestions for things they want to change. In that case, it’s not appropriate to rank the groups. If ranking isn’t needed, you may want to consider affinity diagrams complete after the grouping process.`,
            },
            {
                'title' : 'How to draw notes? Sketchnoting using a whiteboard',
                'image' : 'https://explaineverything.com/wp-content/uploads/2024/03/sketchnoting-cover-1536x768.png',
                'discrible' : 'How to draw notes online? Sketchnoting, or visual notetaking, is a textbook practical application of what’s called dual coding theory, thanks to how it combines both words and images to convey a message. Sketchnoting is based on low-complexity visual outputs, typically a combination of dots, lines, circles, squares and triangles. ',
                'content' : `How to draw notes, and what is sketchnoting?
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
                'title' : 'Did you hear? Explain Everything Advanced is now available on the app stores.',
                'image' : 'https://explaineverything.com/wp-content/uploads/2024/05/ee_advanced_cover-1536x768.png',
                'discrible' : 'It’s been almost two years since Explain Everything joined forces with Promethean – a leading global education technology company. And now, Explain Everything is even better with exciting new features and the Explain Everything Advanced plan.',
                'content' : `We also offer customized Explain Everything Advanced plans for institutions, such as schools and districts, which are perfect for groups of educators who need access to management tools, LMS integrations, and expanded collaborative functionality.

I’m on a Solo Teacher Plan – what changes? 
If you are currently using Explain Everything on the Solo Teacher plan ($34.99/year), you can renew your subscription and continue using the app at the same price.
Should you choose to cancel your subscription after June 10, 2024, you will only be able to start a new subscription for Explain Everything Advanced.

When canceling your Solo Teacher plan, the app will  present you with an option to purchase the new Explain Everything Advanced plan. So, if you are happy with the Solo Teacher plan, simply renew your subscription.

I’m on an Individual / Pro plan – has that plan changed?
No, if you are a user of an Individual plan or a Pro plan, your subscription price remains the same. But, you will receive an added bonus – the app will now feature the  Promethean’s Polling, Timer, and Spinner. `,
            },
            {
                'title' : 'How to Make an Ecomap with an Online Whiteboard',
                'image' : 'https://explaineverything.com/wp-content/uploads/2024/05/aplx_ee_advanced_uk_secondary_0424v1.png',
                'discrible' : 'An ecomap is a great tool that allows a teacher to visualize the people who are important to their pupils. Unlike genograms, ecomaps are a visualization of a child’s or young person’s personal network. They can consist of all kinds of personal connections, not just family. This includes friends, neighbors, or even the school staff.',
                'content' : `What is an Ecomap?
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
                'title' : 'Explain Everything Integrations and Apps in a nutshell',
                'image' : 'https://explaineverything.com/wp-content/uploads/2024/06/explain-everything-integrations-and-apps-in-a-nutshell-1-1536x768.png',
                'discrible' : 'Today, let’s go through the popular Explain Everything integrations and LMS (Learning Management Systems) that support our product!',
                'content' : `Google Classroom 
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
                'title' : 'Teaching Reading and Writing with a Smartboard',
                'image' : 'https://explaineverything.com/wp-content/uploads/2023/04/image-15.png',
                'discrible' : 'At the core of a child’s academic development is their literacy level. Forming a solid baseline knowledge of reading and writing is one of the most important things a teacher can do.',
                'content' : `At the core of a child’s academic development is their literacy level. Forming a solid baseline knowledge of reading and writing is one of the most important things a teacher can do. However, it’s possible to forget how challenging learning to read and write for the first time can be. After all, teachers have spent a large part of their training and careers internalizing much of the process.

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
                'title' : 'Making a 5E Science Lesson Plan With Explain Everything',
                'image' : 'https://explaineverything.com/wp-content/uploads/2024/02/making-a-5e-science-lesson-plan-with-explain-everything-1-1536x768.png',
                'discrible' : 'The benefits of using the 5E lesson plan to structure classes are well-known to science teachers everywhere.',
                'content' : `What is the 5E Lesson Plan?
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
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})