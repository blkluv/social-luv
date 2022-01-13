import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../pages/Home";
import { PageNotFound } from "../pages/PageNotFound";
import { Profile } from "../pages/Profile";
import { Vibes } from "../pages/Vibes";
import { TweetPage } from "../pages/TweetPage";
import { Luvrs } from "../pages/Luvrs";

export function MainLayout() {
  let location = useLocation();

  return (
    <>
      <header className="flex space-x-6 items-center justify-between px-8 py-4 border-b">
        <div className="text-xl font-bold">{location.pathname}</div>
      </header>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="vibes" element={<Vibes />}>
          <Route path=":vibeSlug" element={<Vibes />}></Route>
        </Route>
        <Route path="profile" element={<Profile />}></Route>

        <Route path="luvrs" element={<Luvrs/>}>
          <Route path=":authorSlug" element={<Luvrs />}></Route>
        </Route>

        <Route path="tweet" element={<TweetPage />}>
          <Route path=":tweetSlug" element={<TweetPage />}></Route>
        </Route>
        <Route exact path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}
