import { unmountComponentAtNode } from 'react-dom';

const prepareTestEnv = (): void => {
  let container: HTMLDivElement = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
};

export default prepareTestEnv;
