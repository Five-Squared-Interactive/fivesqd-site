import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import tutorialMd from 'virtual:remote-md/gitworld-tutorial';

const GitWorlds = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section">
        <div className="container text-center">
          <h1>Git Worlds</h1>
          <p className="section-subtitle">
            Fork a template, edit your world, push to deploy. No engine, no SDK — just Git.
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://github.com/Five-Squared-Interactive/GitWorld-Starter" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Use the Template
            </a>
            <a href="#tutorial" className="btn btn-secondary">
              Read the Tutorial
            </a>
          </div>
        </div>
      </section>

      <section className="section section-light" id="tutorial">
        <div className="container">
          <div className="markdown-content">
            {tutorialMd ? (
              <Markdown remarkPlugins={[remarkGfm]}>{tutorialMd}</Markdown>
            ) : (
              <p>
                Tutorial unavailable. View it on{' '}
                <a href="https://github.com/Five-Squared-Interactive/GitWorld-Starter/blob/main/docs/tutorial.md" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GitWorlds;
