import { render } from '@testing-library/react';

import LibsPicking from './libs-picking';

describe('LibsPicking', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibsPicking />);
    expect(baseElement).toBeTruthy();
  });
});
