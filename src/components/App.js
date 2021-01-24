import Section from './Section';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import Fetcher from './Fetcher';
import Modal from '../renderProps/Modal';
import SearchSelect from '../renderProps/SearchSelect';
import ThemeContext from '../context/ThemeContext';
import ThemePreview from './ThemePreview';

import { Themes } from '../constants';

function App() {
  return (
    <div>
      <ThemeContext.Provider value={Themes.Dark}>
        <h1>Patterns</h1>

        <ThemePreview />

        {/* Render props */}
        <Section title="Modal Render Prop">
          <Modal>
            {(isOpen, toggleModal) => (
              <div>
                <button type="button" onClick={toggleModal}>
                  Toggle modal
                </button>
                {isOpen && <p>Modal content</p>}
              </div>
            )}
          </Modal>
        </Section>

        <Section title="Search Select">
          <SearchSelect
            options={[1, 2, 3, 4, 5]}
            filterMethod={(value, options) =>
              options.filter((item) => item.toString().includes(value))
            }
          >
            {(results, search) => (
              <div>
                <input type="search" onChange={search} />
                <ul>
                  {results.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </SearchSelect>
        </Section>

        {/* HOCs */}
        <Section title="Click counter">
          <ClickCounter testProp="computer" />
        </Section>
        <Section title="Hover counter">
          <HoverCounter anotherProp="computer3" />
        </Section>
        <Section title="WithFetch HOC">
          <Fetcher />
        </Section>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
