describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('hello'))).toBeVisible();
  });

  it('should show hello message after tap', async () => {
    await element(by.id('hello')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });
});
