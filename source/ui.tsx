import React, { FC } from 'react';
import { Text, Box, useStdout } from 'ink';
import figlet from 'figlet';

// Custom component for stable links without re-renders
const TerminalLink: FC<{ url: string; children: React.ReactNode }> = ({ url, children }) => {
    return (
        <Text>
            {'\u001B]8;;'}{url}{'\u001B\\'}{children}{'\u001B]8;;\u001B\\'}
        </Text>
    );
};

const App: FC<{ name?: string }> = ({ name = 'Yashas.VM' }) => {
    const { stdout } = useStdout();
    const safeTerminalWidth = stdout.columns || 80;
    const cardWidth = Math.max(20, Math.min(safeTerminalWidth - 1, 100));
    const innerWidth = Math.max(20, cardWidth - 4);
    const divider = '-'.repeat(innerWidth);

    const font = innerWidth >= 70 ? 'Slant' : innerWidth >= 55 ? 'Standard' : 'Small';
    let text = name;
    try {
        text = figlet.textSync(name, { font, width: innerWidth });
    } catch {
        text = name;
    }

    return (
        <Box flexDirection="column" padding={1} borderStyle="round" borderColor="cyan" width={cardWidth}>
            {/* Header Area */}
            <Box flexDirection="column" marginBottom={1}>
                <Text color="cyan">{text}</Text>
                <Text dimColor>{divider}</Text>
            </Box>

            {/* Intro Section */}
            <Box flexDirection="column" marginBottom={1}>
                <Box>
                    <Text color="green" bold>yashas.vm:~$ </Text>
                    <Text color="white">whoami</Text>
                </Box>
                <Box flexDirection="column" paddingLeft={2} marginTop={1}>
                    <Text bold>17-year-old Tech Enthusiast & Student</Text>
                    <Text italic dimColor>Bengaluru, Karnataka | XII Science (PCMC)</Text>
                    <Box marginTop={1}>
                        <Text>
                            "Self-hosting advocate who loves breaking things just to fix them again."
                        </Text>
                    </Box>
                </Box>
            </Box>

            {/* Interests Section */}
            <Box flexDirection="column" marginBottom={1}>
                <Box>
                    <Text color="green" bold>yashas.vm:~$ </Text>
                    <Text color="white">cat /etc/interests.txt</Text>
                </Box>
                <Box flexDirection="column" paddingLeft={2} marginTop={1}>
                    <Text><Text color="green">*</Text> Hosting everything locally & home labbing</Text>
                    <Text><Text color="green">*</Text> Networking & infrastructure tinkering</Text>
                    <Text><Text color="green">*</Text> Experimenting with LLMs & generative models</Text>
                    <Text><Text color="green">*</Text> Python enthusiast</Text>
                    <Text><Text color="green">*</Text> Fixing old or broken computer parts</Text>
                    <Text><Text color="green">*</Text> Building alternatives to unusable software</Text>
                    <Text><Text color="green">*</Text> Security - Running my own SIEM (Wazuh)</Text>
                </Box>
            </Box>

            {/* Tech Stack Grid */}
            <Box flexDirection="column" marginBottom={1}>
                <Box>
                    <Text color="green" bold>yashas.vm:~$ </Text>
                    <Text color="white">cat /var/lib/tech-stack.json</Text>
                </Box>
                <Box flexDirection="column" paddingLeft={2} marginTop={1}>
                    <Box>
                        <Box width={18}><Text bold color="blue">Languages</Text></Box>
                        <Text>Python, TypeScript, Go, Rust</Text>
                    </Box>
                    <Box>
                        <Box width={18}><Text bold color="blue">Containerization</Text></Box>
                        <Text>Docker, Podman</Text>
                    </Box>
                    <Box>
                        <Box width={18}><Text bold color="blue">Home Lab</Text></Box>
                        <Text>Proxmox, WireGuard, Pi-hole</Text>
                    </Box>
                    <Box>
                        <Box width={18}><Text bold color="blue">Security</Text></Box>
                        <Text>Wazuh SIEM, Kali Linux</Text>
                    </Box>
                </Box>
            </Box>

             {/* GitHub Stats Mockup */}
             <Box flexDirection="column" marginBottom={1}>
                <Box>
                    <Text color="green" bold>yashas.vm:~$ </Text>
                    <Text color="white">gh api users/YashasVM/stats</Text>
                </Box>
                <Box flexDirection="column" paddingLeft={2} marginTop={1}>
                    <Box>
                        <Box width={15}><Text>Python</Text></Box>
                        <Text color="yellow">████████████████████</Text>
                        <Text> 65%</Text>
                    </Box>
                    <Box>
                        <Box width={15}><Text>TypeScript</Text></Box>
                        <Text color="blue">████████</Text>
                        <Text> 25%</Text>
                    </Box>
                    <Box>
                        <Box width={15}><Text>Other</Text></Box>
                        <Text color="white">███</Text>
                        <Text> 10%</Text>
                    </Box>
                </Box>
            </Box>

            {/* Contact Grid */}
            <Box flexDirection="column" marginBottom={1}>
                <Box>
                    <Text color="green" bold>yashas.vm:~$ </Text>
                    <Text color="white">curl localhost:8080/contact</Text>
                </Box>
                <Box flexDirection="column" paddingLeft={2} marginTop={1}>
                    <Box>
                        <Box width={12}><Text bold>Email</Text></Box>
                        <TerminalLink url="mailto:yashasvm0@gmail.com">
                            <Text color="cyan">yashasvm0@gmail.com</Text>
                        </TerminalLink>
                    </Box>
                    <Box>
                        <Box width={12}><Text bold>LinkedIn</Text></Box>
                        <TerminalLink url="https://www.linkedin.com/in/yashas-vm-718457380/">
                            <Text color="cyan">linkedin.com/in/yashas-vm</Text>
                        </TerminalLink>
                    </Box>
                    <Box>
                        <Box width={12}><Text bold>GitHub</Text></Box>
                        <TerminalLink url="https://github.com/YashasVM">
                            <Text color="cyan">github.com/YashasVM</Text>
                        </TerminalLink>
                    </Box>
                    <Box>
                        <Box width={12}><Text bold>Instagram</Text></Box>
                        <TerminalLink url="https://instagram.com/yashas.vm">
                            <Text color="cyan">instagram.com/yashas.vm</Text>
                        </TerminalLink>
                    </Box>
                </Box>
            </Box>

            <Box marginTop={1} justifyContent="center">
                <Text dimColor>{divider}</Text>
            </Box>
             <Box justifyContent="center">
                <Text color="green">yashas.vm:~$ </Text>
                <Text color="white">exit</Text>
            </Box>
        </Box>
    );
};

export default App;
