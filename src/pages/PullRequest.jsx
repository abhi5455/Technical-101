import {Link} from "react-router-dom";
import '/src/components/header/header.css'

export default function PullRequest() {
    return <>
        <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            height: "100%",
            width: "100%"
        }}>
            <header className={'header'}>
                <img alt={''} src={'/tinkerLogo.png'} className={'logo'}></img>
                Technical101 - 2024
                <Link to={'https://github.com/abhi5455/Technical-101'} className={'pullRequest'} onClick={() => {
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="icon-tabler icons-tabler-outline icon-tabler-git-fork"
                         style={{marginRight: "50px"}}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                        <path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                        <path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                        <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2"/>
                        <path d="M12 12l0 4"/>
                        <title>GitRepo</title>
                    </svg>
                </Link>
                <Link to={'/'} className={'pullRequest'} onClick={() => {
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="icon-tabler icons-tabler-outline icon-tabler-home">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 12l-2 0l9 -9l9 9l-2 0"/>
                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/>
                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/>
                        <title>Home</title>
                    </svg>
                </Link>
            </header>
            <div className={"container"} style={{
                padding: "20px", maxWidth: "800px", margin: "auto", color: "#bfc2ca",
                fontFamily: "Poppins, sans-serif"
            }}>
                <h1>Contribute to Our Resources</h1>
                <p>
                    Thank you for your interest in improving our resources! We welcome contributions and suggestions
                    from
                    the community to keep our content up-to-date and relevant. Here’s how you can get involved:
                </p>

                <h2>How to Suggest Edits or Add New Resources</h2>
                <ol>
                    <li>
                        <strong>Visit Our GitHub Repository</strong>
                        <p>
                            Go to the{" "}
                            <a href="https://github.com/abhi5455/Technical-101" target="_blank"
                               rel="noopener noreferrer" style={{color: "#3b93f8"}}>
                                GitHub repository
                            </a>{" "}
                            where our resources page is hosted.
                        </p>
                    </li>
                    <li>
                        <strong>Fork the Repository</strong>
                        <p>Click on the &quot;Fork&quot; button to create a copy of the repository in your GitHub account.</p>
                    </li>
                    <li>
                        <strong>Clone the Repository</strong>
                        <p>Clone the forked repository to your local machine to start making changes:</p>
                        <pre>
                <code>git clone https://github.com/your-username/repository-name.git</code>
              </pre>
                    </li>
                    <li>
                        <strong>Create a New Branch</strong>
                        <p>For a cleaner workflow, create a new branch for your changes:</p>
                        <pre>
                <code>git checkout -b suggested-changes</code>
              </pre>
                    </li>
                    <li>
                        <strong>Make Your Changes</strong>
                        <p>Edit the files in the &quot;Resources&quot; section to add new links, modify descriptions, or update
                            outdated resources. Ensure your suggestions are accurate and valuable for other users.</p>
                    </li>
                    <li>
                        <strong>Commit and Push Your Changes</strong>
                        <p>Once your changes are ready, commit and push them to your forked repository:</p>
                        <pre>
                <code>git add .</code><br/>
                <code>git commit -m &quot;Add suggestions to resources&quot;</code><br/>
                <code>git push origin suggested-changes</code>
              </pre>
                    </li>
                    <li>
                        <strong>Open a Pull Request</strong>
                        <p>
                            Go to your GitHub repository and open a pull request against our main repository. Describe
                            the
                            changes and improvements you’ve made in the pull request description.
                        </p>
                    </li>
                </ol>

                <h2>Guidelines for Contributions</h2>
                <ul>
                    <li><strong>Relevance</strong>: Ensure that the resources are directly related to Technology and
                        relevant
                        to other users.
                    </li>
                    <li><strong>Accuracy</strong>: Verify that links work and content descriptions are accurate.</li>
                    <li><strong>Conciseness</strong>: Keep descriptions brief but informative.</li>
                </ul>

                <h2>Questions?</h2>
                <p>
                    If you have questions, feel free to reach out through the issues section in our GitHub repository.
                </p>
                <p>Thank you for helping make our resources better for everyone!</p>
            </div>
        </div>
    </>
}