# Website archive

These backups preserve earlier website pages, styles, images, and papers so they can be inspected or restored in GitHub. Previous CV PDFs have been removed; the current CV is available only as `Qiurong_Song_CV.pdf` in the repository root. Archived CV buttons point to that current file.

| Snapshot | Contents | Source commit |
| --- | --- | --- |
| [Original website](2026-11-20/original-site/) | The website before the single-page redesign, including the original pages, styles, images, and papers. | `42250bd45c902d57383ddd188cb622c39393db43` |
| [Previous single-page draft](2026-11-20/previous-single-page/) | The earlier single-page draft, with its old CV removed and its CV buttons updated to the current file. | `3d478ac6672486261123043ee043e27e6b1d5135` |

## Restore an individual file

Open the desired snapshot folder, locate the file, and copy it back to the matching path in the repository root. Make the change on a branch and review the pull request before merging. CV backups are not included in these folders.

## Restore the original website

Copy the contents of `2026-11-20/original-site/` to the repository root, preserving its directory structure and replacing files with the same names. Review and commit those changes on a branch. Existing Git history is also available for restoring any earlier version.

The archived `index oldversion.html`, `old_html`, and `style.css` files have been moved out of the active root. The old page URLs (`publications.html`, `projects.html`, `news.html`, `personal.html`, and `contact.html`) remain as redirects to their sections on the current homepage.

This folder is for restoration through GitHub. It is not linked from the public website navigation.

Older commits still retain earlier versions in Git history. Removing these CV files from the current folders does not rewrite that history.
