// Repos
export type Repo = {
  id: string
  name: string
  html_url: string
  owner: {
    login: string
  }
}

export type Repos = {
  repoList: Repo[]
}

export type GetReposRequestAction = {
  type: string
  payload: string
}

export type GetReposSuccessAction = {
  type: string
  payload: Repo[]
}

export type GetReposFailAction = {
  type: string
  payload: any
}

// Gists
export type Gist = {
  id: string
  html_url: string
  description: string
  owner: {
    login: string
  }
}

export type Gists = {
  gistList: Gist[]
}

export type GetGistsRequestAction = {
  type: string
  payload: string
}

export type GetGistsSuccessAction = {
  type: string
  payload: Gist[]
}

export type GetGistsFailAction = {
  type: string
  payload: any
}

// Organizations
export type Organization = {
  id: string
  description: string
  owner: {
    login: string
  }
}

export type Organizations = {
  gistList: Organization[]
}

export type GetOrganizationsRequestAction = {
  type: string
  payload: string
}

export type GetOrganizationsSuccessAction = {
  type: string
  payload: Organization[]
}

export type GetOrganizationsFailAction = {
  type: string
  payload: any
}

// Union
export type ActionTypes = 
  | GetReposRequestAction
  | GetReposSuccessAction
  | GetReposFailAction 
  | GetGistsRequestAction
  | GetGistsSuccessAction
  | GetGistsFailAction 
  | GetOrganizationsRequestAction
  | GetOrganizationsSuccessAction
  | GetOrganizationsFailAction 
  

// AppState
export type AppState = {
  repos: {
    repoList: Repo[]
  }
  gists: {
    gistList: Gist[]
  },
  organizations: {
    organizationList: Organization[]
  }
}

// Prop types
export type SearchProps = {
  input: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent) => void
}

export type RepositoryProps = {
  repo: Repo
}

export type GistProps = {
  gist: Gist
}

export type OrganizationProps = {
  organization: Organization
}

