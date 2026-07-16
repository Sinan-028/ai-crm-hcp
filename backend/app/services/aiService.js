import api from "./api";

export const askAI = async (interactionId, query) => {
  const response = await api.post("/ai/chat", {
    interaction_id: interactionId,
    query,
  });

  return response.data.response;
};