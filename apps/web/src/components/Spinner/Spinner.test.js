import { render, screen } from '@testing-library/react';
import LoadingProvider from '../../contexts/LoadingProvider';
import Spinner from './index';

describe('<Spinner />', () => {
  it('should match snapshots', () => {
    renderSpinner();
    expect(screen.getByTestId('spinner')).toMatchSnapshot();
  });
});

const renderSpinner = () => {
  return render(
    <LoadingProvider>
      <Spinner />
    </LoadingProvider>
  );
};