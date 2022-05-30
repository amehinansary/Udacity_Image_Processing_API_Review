import { findOrCreateThumb } from '../images';

describe('test processing via sharp', (): void => {
  it('invalid (invalid width value)', async (): Promise<void> => {
    const image: boolean | string = await findOrCreateThumb({
      filename: 'santamonica',
      width: -200,
      height: 600
    });
    expect(image).toBeFalsy();
  });

  it('invalid (filename does not exist)', async (): Promise<void> => {
    const image: boolean | string = await findOrCreateThumb({
      filename: 'test',
      width: 200,
      height: 600
    });
    expect(image).toBeFalsy();
  });
});
