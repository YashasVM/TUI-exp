#!/usr/bin/env node
import React from 'react';
import { render, Static } from 'ink';
import meow from 'meow';
import App from './ui.js';

const cli = meow(
	`
	Usage
	  $ npx yashasvm

	Options
		--name  Your name

	Examples
	  $ npx yashasvm --name=Jane
`,
	{
		importMeta: import.meta,
		flags: {
			name: {
				type: 'string',
			},
		},
	},
);

render(
	<Static items={['dummy']}>
		{() => <App name={cli.flags.name} key="card" />}
	</Static>
);
