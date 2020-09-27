import { decorate, observable } from "mobx";
import AsyncStorage from "@react-native-community/async-storage";

class BookmarkStore {
  bookmarks = [];

  addBookmark = async (bookmarkedRecipe) => {
    try {
      this.bookmarks.push(bookmarkedRecipe);
      await AsyncStorage.setItem("myBookmarks", JSON.stringify(this.bookmarks));
    } catch (error) {
      console.log("BookmarkStore -> toggleBookmarks -> error", error);
    }
  };

  removeBookmark = async (bookmarkedRecipeLabel) => {
    this.bookmarks = this.bookmarks.filter(
      (bookmark) => bookmark.label !== bookmarkedRecipeLabel
    );
    await AsyncStorage.setItem("myBookmarks", JSON.stringify(this.bookmarks));
    // this.fetchBookmarks();
  };

  fetchBookmarks = async () => {
    const bookmarks = await AsyncStorage.getItem("myBookmarks");
    this.bookmarks = bookmarks ? JSON.parse(bookmarks) : [];
  };
}

decorate(BookmarkStore, { bookmarks: observable });

const bookmarkStore = new BookmarkStore();
bookmarkStore.fetchBookmarks();
export default bookmarkStore;
