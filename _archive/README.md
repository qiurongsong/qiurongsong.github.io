# Website archive

These backups preserve earlier website materials so they can be inspected or restored in GitHub. The two site snapshot folders contain complete site files and assets from their source commits, with their original filenames and relative paths. Individual CV backups are listed separately below.

| Snapshot | Contents | Source commit |
| --- | --- | --- |
| [Original website](2026-11-20/original-site/) | The website before the single-page redesign, including the original pages, styles, images, and papers. | `42250bd45c902d57383ddd188cb622c39393db43` |
| [Previous single-page draft](2026-11-20/previous-single-page/) | The single-page draft before the two-row craft gallery and November 20 CV replacement. Includes the previous CV. | `3d478ac6672486261123043ee043e27e6b1d5135` |

## Previous CV

[CV before the latest upload](2026-11-21/Qiurong_Song_CV_previous.pdf) preserves the website PDF from commit `ce4367f8e9c3a288c1e7e6f020eab89eb18c53a1`, before the latest CV replacement and PDF-link consistency update. Copy this file to `Qiurong_Song_CV.pdf` in the repository root to restore it.

## Restore an individual file

Open the desired snapshot folder, locate the file, and copy it back to the matching path in the repository root. For example, to restore the previous CV, copy `2026-11-20/previous-single-page/Qiurong_Song_CV.pdf` to `Qiurong_Song_CV.pdf` in the root. Make the change on a branch and review the pull request before merging.

## Restore the original website

Copy the contents of `2026-11-20/original-site/` to the repository root, preserving its directory structure and replacing files with the same names. Review and commit those changes on a branch. Existing Git history is also available for restoring any earlier version.

The archived `index oldversion.html`, `old_html`, and `style.css` files have been moved out of the active root. The old page URLs (`publications.html`, `projects.html`, `news.html`, `personal.html`, and `contact.html`) remain as redirects to their sections on the current homepage.

This folder is for restoration through GitHub. It is not linked from the public website navigation.
