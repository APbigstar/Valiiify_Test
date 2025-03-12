export const PremiumSetting = {
  free: {
    avatar: 1,
    interaction_fee: 0,
    share: false,
    embed: false,
    api_access: false,
    chatgpt: false,
  },
  basic: {
    avatar: 3,
    interaction_fee: 1,
    share: true,
    embed: false,
    api_access: false,
    chatgpt: false,
  },
  premium: {
    avatar: 10,
    interaction_fee: 0.9,
    share: true,
    embed: true,
    api_access: false,
    chatgpt: true,
  },
  pro: {
    avatar: 20,
    interaction_fee: 0.8,
    share: true,
    embed: true,
    api_access: true,
    chatgpt: true,
  },
};
