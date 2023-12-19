class EventBrite {
  constructor() {
    this.auth_token = "HWW36W67VU6S5GCHS6QI";
  }

  async getCategoriesAPI() {
    const catigoriesResponse = await fetch(
      `https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`
    );

    const cagitories = await catigoriesResponse.json();

    return { cagitories };
  }
}
