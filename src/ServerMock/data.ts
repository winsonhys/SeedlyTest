const DATA = {
  FEATURED_TOPICS: [
    { topicId: 1, topicName: "Seedly" },
    { topicId: 2, topicName: "Other Apps" }
  ],

  TOPIC_QUESTIONS: {
    1: { id: "q1", question: "Is seedly the best?" },
    2: { id: "q2", question: "Are other apps the best?" }
  },

  TOPIC_ANSWERS: {
    q1: { id: "a1", user_id: "u1", answer: "Yes" },
    q2: { id: "a2", user_id: "u2", answer: "No" }
  },

  USERS: {
    a1: { name: "Generic Name", level: 1 },
    a2: { name: "Non Generic Name", level: 2 }
  }
};

export default DATA;
