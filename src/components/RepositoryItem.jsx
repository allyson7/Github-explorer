export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? "default unform"}</strong>
      <p>{props.repository?.description}</p>

      <a href={props.repository?.html_url} target="_blank">
        Acessar Repositório no GitHub
      </a>
    </li>
  );
}
