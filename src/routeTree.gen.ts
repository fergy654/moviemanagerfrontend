/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProtectedImport } from './routes/_protected'
import { Route as ChatImport } from './routes/_chat'
import { Route as ProtectedMovieGenreIdGenreNameRouteImport } from './routes/_protected/movie.$genreId.$genreName.route'
import { Route as ChatChatSenderIdRecipientIdRouteImport } from './routes/_chat/chat.$senderId.$recipientId.route'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const ProtectedGenreSelectionLazyImport = createFileRoute(
  '/_protected/genreSelection',
)()
const ProtectedGenderSelectionLazyImport = createFileRoute(
  '/_protected/genderSelection',
)()
const ProtectedDashboardLazyImport = createFileRoute('/_protected/dashboard')()
const ProtectedCredentialLazyImport = createFileRoute(
  '/_protected/credential',
)()
const ChatChatLazyImport = createFileRoute('/_chat/chat')()
const AuthAuthRegisterLazyImport = createFileRoute('/_auth/auth/register')()
const AuthAuthLoginLazyImport = createFileRoute('/_auth/auth/login')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const ProtectedRoute = ProtectedImport.update({
  id: '/_protected',
  getParentRoute: () => rootRoute,
} as any)

const ChatRoute = ChatImport.update({
  id: '/_chat',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const ProtectedGenreSelectionLazyRoute =
  ProtectedGenreSelectionLazyImport.update({
    id: '/genreSelection',
    path: '/genreSelection',
    getParentRoute: () => ProtectedRoute,
  } as any).lazy(() =>
    import('./routes/_protected/genreSelection.lazy').then((d) => d.Route),
  )

const ProtectedGenderSelectionLazyRoute =
  ProtectedGenderSelectionLazyImport.update({
    id: '/genderSelection',
    path: '/genderSelection',
    getParentRoute: () => ProtectedRoute,
  } as any).lazy(() =>
    import('./routes/_protected/genderSelection.lazy').then((d) => d.Route),
  )

const ProtectedDashboardLazyRoute = ProtectedDashboardLazyImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => ProtectedRoute,
} as any).lazy(() =>
  import('./routes/_protected/dashboard.lazy').then((d) => d.Route),
)

const ProtectedCredentialLazyRoute = ProtectedCredentialLazyImport.update({
  id: '/credential',
  path: '/credential',
  getParentRoute: () => ProtectedRoute,
} as any).lazy(() =>
  import('./routes/_protected/credential.lazy').then((d) => d.Route),
)

const ChatChatLazyRoute = ChatChatLazyImport.update({
  id: '/chat',
  path: '/chat',
  getParentRoute: () => ChatRoute,
} as any).lazy(() => import('./routes/_chat/chat.lazy').then((d) => d.Route))

const AuthAuthRegisterLazyRoute = AuthAuthRegisterLazyImport.update({
  id: '/_auth/auth/register',
  path: '/auth/register',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/_auth/auth/register.lazy').then((d) => d.Route),
)

const AuthAuthLoginLazyRoute = AuthAuthLoginLazyImport.update({
  id: '/_auth/auth/login',
  path: '/auth/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/_auth/auth/login.lazy').then((d) => d.Route),
)

const ProtectedMovieGenreIdGenreNameRouteRoute =
  ProtectedMovieGenreIdGenreNameRouteImport.update({
    id: '/movie/$genreId/$genreName',
    path: '/movie/$genreId/$genreName',
    getParentRoute: () => ProtectedRoute,
  } as any)

const ChatChatSenderIdRecipientIdRouteRoute =
  ChatChatSenderIdRecipientIdRouteImport.update({
    id: '/$senderId/$recipientId',
    path: '/$senderId/$recipientId',
    getParentRoute: () => ChatChatLazyRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_chat': {
      id: '/_chat'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof ChatImport
      parentRoute: typeof rootRoute
    }
    '/_protected': {
      id: '/_protected'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof ProtectedImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/_chat/chat': {
      id: '/_chat/chat'
      path: '/chat'
      fullPath: '/chat'
      preLoaderRoute: typeof ChatChatLazyImport
      parentRoute: typeof ChatImport
    }
    '/_protected/credential': {
      id: '/_protected/credential'
      path: '/credential'
      fullPath: '/credential'
      preLoaderRoute: typeof ProtectedCredentialLazyImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/dashboard': {
      id: '/_protected/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof ProtectedDashboardLazyImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/genderSelection': {
      id: '/_protected/genderSelection'
      path: '/genderSelection'
      fullPath: '/genderSelection'
      preLoaderRoute: typeof ProtectedGenderSelectionLazyImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/genreSelection': {
      id: '/_protected/genreSelection'
      path: '/genreSelection'
      fullPath: '/genreSelection'
      preLoaderRoute: typeof ProtectedGenreSelectionLazyImport
      parentRoute: typeof ProtectedImport
    }
    '/_auth/auth/login': {
      id: '/_auth/auth/login'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthAuthLoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/_auth/auth/register': {
      id: '/_auth/auth/register'
      path: '/auth/register'
      fullPath: '/auth/register'
      preLoaderRoute: typeof AuthAuthRegisterLazyImport
      parentRoute: typeof rootRoute
    }
    '/_chat/chat/$senderId/$recipientId': {
      id: '/_chat/chat/$senderId/$recipientId'
      path: '/$senderId/$recipientId'
      fullPath: '/chat/$senderId/$recipientId'
      preLoaderRoute: typeof ChatChatSenderIdRecipientIdRouteImport
      parentRoute: typeof ChatChatLazyImport
    }
    '/_protected/movie/$genreId/$genreName': {
      id: '/_protected/movie/$genreId/$genreName'
      path: '/movie/$genreId/$genreName'
      fullPath: '/movie/$genreId/$genreName'
      preLoaderRoute: typeof ProtectedMovieGenreIdGenreNameRouteImport
      parentRoute: typeof ProtectedImport
    }
  }
}

// Create and export the route tree

interface ChatChatLazyRouteChildren {
  ChatChatSenderIdRecipientIdRouteRoute: typeof ChatChatSenderIdRecipientIdRouteRoute
}

const ChatChatLazyRouteChildren: ChatChatLazyRouteChildren = {
  ChatChatSenderIdRecipientIdRouteRoute: ChatChatSenderIdRecipientIdRouteRoute,
}

const ChatChatLazyRouteWithChildren = ChatChatLazyRoute._addFileChildren(
  ChatChatLazyRouteChildren,
)

interface ChatRouteChildren {
  ChatChatLazyRoute: typeof ChatChatLazyRouteWithChildren
}

const ChatRouteChildren: ChatRouteChildren = {
  ChatChatLazyRoute: ChatChatLazyRouteWithChildren,
}

const ChatRouteWithChildren = ChatRoute._addFileChildren(ChatRouteChildren)

interface ProtectedRouteChildren {
  ProtectedCredentialLazyRoute: typeof ProtectedCredentialLazyRoute
  ProtectedDashboardLazyRoute: typeof ProtectedDashboardLazyRoute
  ProtectedGenderSelectionLazyRoute: typeof ProtectedGenderSelectionLazyRoute
  ProtectedGenreSelectionLazyRoute: typeof ProtectedGenreSelectionLazyRoute
  ProtectedMovieGenreIdGenreNameRouteRoute: typeof ProtectedMovieGenreIdGenreNameRouteRoute
}

const ProtectedRouteChildren: ProtectedRouteChildren = {
  ProtectedCredentialLazyRoute: ProtectedCredentialLazyRoute,
  ProtectedDashboardLazyRoute: ProtectedDashboardLazyRoute,
  ProtectedGenderSelectionLazyRoute: ProtectedGenderSelectionLazyRoute,
  ProtectedGenreSelectionLazyRoute: ProtectedGenreSelectionLazyRoute,
  ProtectedMovieGenreIdGenreNameRouteRoute:
    ProtectedMovieGenreIdGenreNameRouteRoute,
}

const ProtectedRouteWithChildren = ProtectedRoute._addFileChildren(
  ProtectedRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '': typeof ProtectedRouteWithChildren
  '/about': typeof AboutLazyRoute
  '/chat': typeof ChatChatLazyRouteWithChildren
  '/credential': typeof ProtectedCredentialLazyRoute
  '/dashboard': typeof ProtectedDashboardLazyRoute
  '/genderSelection': typeof ProtectedGenderSelectionLazyRoute
  '/genreSelection': typeof ProtectedGenreSelectionLazyRoute
  '/auth/login': typeof AuthAuthLoginLazyRoute
  '/auth/register': typeof AuthAuthRegisterLazyRoute
  '/chat/$senderId/$recipientId': typeof ChatChatSenderIdRecipientIdRouteRoute
  '/movie/$genreId/$genreName': typeof ProtectedMovieGenreIdGenreNameRouteRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '': typeof ProtectedRouteWithChildren
  '/about': typeof AboutLazyRoute
  '/chat': typeof ChatChatLazyRouteWithChildren
  '/credential': typeof ProtectedCredentialLazyRoute
  '/dashboard': typeof ProtectedDashboardLazyRoute
  '/genderSelection': typeof ProtectedGenderSelectionLazyRoute
  '/genreSelection': typeof ProtectedGenreSelectionLazyRoute
  '/auth/login': typeof AuthAuthLoginLazyRoute
  '/auth/register': typeof AuthAuthRegisterLazyRoute
  '/chat/$senderId/$recipientId': typeof ChatChatSenderIdRecipientIdRouteRoute
  '/movie/$genreId/$genreName': typeof ProtectedMovieGenreIdGenreNameRouteRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/_chat': typeof ChatRouteWithChildren
  '/_protected': typeof ProtectedRouteWithChildren
  '/about': typeof AboutLazyRoute
  '/_chat/chat': typeof ChatChatLazyRouteWithChildren
  '/_protected/credential': typeof ProtectedCredentialLazyRoute
  '/_protected/dashboard': typeof ProtectedDashboardLazyRoute
  '/_protected/genderSelection': typeof ProtectedGenderSelectionLazyRoute
  '/_protected/genreSelection': typeof ProtectedGenreSelectionLazyRoute
  '/_auth/auth/login': typeof AuthAuthLoginLazyRoute
  '/_auth/auth/register': typeof AuthAuthRegisterLazyRoute
  '/_chat/chat/$senderId/$recipientId': typeof ChatChatSenderIdRecipientIdRouteRoute
  '/_protected/movie/$genreId/$genreName': typeof ProtectedMovieGenreIdGenreNameRouteRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/about'
    | '/chat'
    | '/credential'
    | '/dashboard'
    | '/genderSelection'
    | '/genreSelection'
    | '/auth/login'
    | '/auth/register'
    | '/chat/$senderId/$recipientId'
    | '/movie/$genreId/$genreName'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/about'
    | '/chat'
    | '/credential'
    | '/dashboard'
    | '/genderSelection'
    | '/genreSelection'
    | '/auth/login'
    | '/auth/register'
    | '/chat/$senderId/$recipientId'
    | '/movie/$genreId/$genreName'
  id:
    | '__root__'
    | '/'
    | '/_chat'
    | '/_protected'
    | '/about'
    | '/_chat/chat'
    | '/_protected/credential'
    | '/_protected/dashboard'
    | '/_protected/genderSelection'
    | '/_protected/genreSelection'
    | '/_auth/auth/login'
    | '/_auth/auth/register'
    | '/_chat/chat/$senderId/$recipientId'
    | '/_protected/movie/$genreId/$genreName'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  ChatRoute: typeof ChatRouteWithChildren
  ProtectedRoute: typeof ProtectedRouteWithChildren
  AboutLazyRoute: typeof AboutLazyRoute
  AuthAuthLoginLazyRoute: typeof AuthAuthLoginLazyRoute
  AuthAuthRegisterLazyRoute: typeof AuthAuthRegisterLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  ChatRoute: ChatRouteWithChildren,
  ProtectedRoute: ProtectedRouteWithChildren,
  AboutLazyRoute: AboutLazyRoute,
  AuthAuthLoginLazyRoute: AuthAuthLoginLazyRoute,
  AuthAuthRegisterLazyRoute: AuthAuthRegisterLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_chat",
        "/_protected",
        "/about",
        "/_auth/auth/login",
        "/_auth/auth/register"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/_chat": {
      "filePath": "_chat.tsx",
      "children": [
        "/_chat/chat"
      ]
    },
    "/_protected": {
      "filePath": "_protected.tsx",
      "children": [
        "/_protected/credential",
        "/_protected/dashboard",
        "/_protected/genderSelection",
        "/_protected/genreSelection",
        "/_protected/movie/$genreId/$genreName"
      ]
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/_chat/chat": {
      "filePath": "_chat/chat.lazy.tsx",
      "parent": "/_chat",
      "children": [
        "/_chat/chat/$senderId/$recipientId"
      ]
    },
    "/_protected/credential": {
      "filePath": "_protected/credential.lazy.tsx",
      "parent": "/_protected"
    },
    "/_protected/dashboard": {
      "filePath": "_protected/dashboard.lazy.tsx",
      "parent": "/_protected"
    },
    "/_protected/genderSelection": {
      "filePath": "_protected/genderSelection.lazy.tsx",
      "parent": "/_protected"
    },
    "/_protected/genreSelection": {
      "filePath": "_protected/genreSelection.lazy.tsx",
      "parent": "/_protected"
    },
    "/_auth/auth/login": {
      "filePath": "_auth/auth/login.lazy.tsx"
    },
    "/_auth/auth/register": {
      "filePath": "_auth/auth/register.lazy.tsx"
    },
    "/_chat/chat/$senderId/$recipientId": {
      "filePath": "_chat/chat.$senderId.$recipientId.route.tsx",
      "parent": "/_chat/chat"
    },
    "/_protected/movie/$genreId/$genreName": {
      "filePath": "_protected/movie.$genreId.$genreName.route.tsx",
      "parent": "/_protected"
    }
  }
}
ROUTE_MANIFEST_END */