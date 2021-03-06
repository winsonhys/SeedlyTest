const DATA = {
  FEATURED_TOPICS: [
    { topicId: "1", topicName: "Seedly" },
    { topicId: "2", topicName: "Other Apps" }
  ],

  TOPIC_QUESTIONS: {
    "1": [{ questionId: "q1", topicId: "1", questionString: "Is seedly the best?" }],
    "2": [{ questionId: "q2", topicId: "2", questionString: "Are other apps the best?" }, { questionId: "q3", topicId: "2", questionString: "This is an unanswered question" }],
  },

  TOPIC_ANSWERS: [
    {
      answerId: "a1",
      userId: "u1",
      answerString: "Yes",
      featured: true,
      questionId: "q1",
      topicId: "1"
    },
    {
      answerId: "a1",
      userId: "u2",
      answerString: "no",
      featured: false,
      questionId: "q1",
      topicId: "1"
    },
    {
      answerId: "a2",
      userId: "u2",
      answerString: "Maybe",
      featured: true,
      questionId: "q2",
      topicId: "2"
    }
  ],
  USERS: {
    a1: { name: "Generic Name", level: 1 },
    a2: { name: "Non Generic Name", level: 2 }
  }
};

export default DATA;
