import antdEN from "antd/lib/locale-provider/en_US";

const AntDLocale = new Map([
    ["en", antdEN]
  ])

export const getAppLocale = (key) => {
    let antd = AntDLocale.get(key);
    if (!antd) antd = antdEN;

    const appLocale = {
        messages: {
        },
        antd: antd,
        locale: key,
    };
    return appLocale;
}
