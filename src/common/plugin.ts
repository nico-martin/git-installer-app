export interface PluginInfos {
  name: string;
  version: string;
  download_url: string;
  homepage: string;
  requires: string;
  tested: string;
  author: string;
  author_homepage: string;
  sections: {
    description: string;
    installation: string;
    changelog: string;
  };
  icons: {
    '1x': string;
    '2x': string;
  };
  banners: {
    low: string;
    high: string;
  };
}

const INFO_URL =
  'https://update.git-installer.com/infos.php?release=latest&utm_source=app';

export const getPluginInfos = async (): Promise<PluginInfos> => {
  const res = await fetch(INFO_URL);
  return await res.json();
};
