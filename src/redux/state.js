const initState = {
  signIn: {
    user: {},
    token: null,
    role: "",
    authenticate: false,
    authenticating: false,
    error: null,
    message: "",
    loading: true,
  },

  signUp: {
    error: null,
    message: "",
    loading: false,
    completed: false,
  },

  globalProduct: {
    globalProducts: [],
    error: null,
    loading: true,
    message: null,
  },

  clickedVideo: {
    data: [],
    error: null,
    loading: true,
    messaage: null,
  },

  topMenuData: {
    data: [],
    loading: false,
    error: null,
  },

  category: {
    categories: [],
    error: null,
    loading: true,
    message: null,
  },

  availableSellers: {
    data: [],
    display: false,
    loading: false,
  },

  globalProductStoreInfo: {
    product: {},
    clickedSeller: {},
    display: false,
    loading: false,
    error: null
  },

  sidebar: {
    display: false,
    loaded: false,
  },

  sideMenuContent: { display: false, loaded: false },
};

export default initState;
