import { Navigate } from "react-router-dom";

import {
  Dictionary,
  Login,
  NotFound,
  SignUp,
  Trainings,
  Words,
  EnglishTenses,
  IrregularVerbs,
  ConditionalSentences,
  PassiveVoice,
  DegreesOfComparison,
  TranslationWords,
} from "pages";
import { IRoutes } from "routes/types";
import { PrivateRoute } from "routes/PrivateRoute";
import { ProtectedRoute } from "routes/ProtectedRoute";

export const ROUTES: IRoutes[] = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Navigate to="/login" />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <ProtectedRoute>
        <SignUp />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dictionary",
    element: (
      <PrivateRoute>
        <Dictionary />
      </PrivateRoute>
    ),
  },
  {
    path: "/dictionary/sets/:setId",
    element: (
      <PrivateRoute>
        <Words />
      </PrivateRoute>
    ),
  },
  {
    path: "/trainings",
    element: (
      <PrivateRoute>
        <Trainings />
      </PrivateRoute>
    ),
  },
  {
    path: "/trainings/grammar/english-tenses",
    element: (
      <PrivateRoute>
        <EnglishTenses />
      </PrivateRoute>
    ),
  },
  {
    path: "/trainings/grammar/irregular-verbs",
    element: (
      <PrivateRoute>
        <IrregularVerbs />
      </PrivateRoute>
    ),
  },
  {
    path: "/trainings/grammar/conditional-sentences",
    element: (
      <PrivateRoute>
        <ConditionalSentences />
      </PrivateRoute>
    ),
  },
  {
    path: "/trainings/grammar/passive-voice",
    element: (
      <PrivateRoute>
        <PassiveVoice />
      </PrivateRoute>
    ),
  },
  {
    path: "/trainings/grammar/adjectives-degrees-of-comparison",
    element: (
      <PrivateRoute>
        <DegreesOfComparison />
      </PrivateRoute>
    ),
  },
  {
    path: "/trainings/vocabulary/translation-of-words",
    element: (
      <PrivateRoute>
        <TranslationWords />
      </PrivateRoute>
    ),
  },
  { path: "*", element: <NotFound /> },
];
