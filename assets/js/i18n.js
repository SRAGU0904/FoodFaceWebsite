"use strict";
// English and Chinese playground interface.
(() => {
  const messages = {
  "en": {
    "title": "FoodFace — Portrait Collage Studio",
    "task": "Play with food",
    "taskGoal": "Create a food-face collage through visual association. Use and combine the supplied foods freely to stand in for facial features and capture what is distinctive about the person.",
    "taskRules": "Choose either portrait and combine any of the 16 food items. Reuse them freely, and move, rotate, flip or resize them proportionally.",
    "original": "Original",
    "collage": "Collage",
    "library": "Food library",
    "clear": "Clear",
    "noSelection": "No selection",
    "size": "Size",
    "rotation": "Rotation",
    "flipH": "Flip horizontal",
    "flipV": "Flip vertical",
    "backward": "Backward",
    "forward": "Forward",
    "duplicate": "Duplicate",
    "delete": "Delete",
    "layers": "Layers",
    "loading": "Loading…",
    "itemOne": "{count} item",
    "itemMany": "{count} items",
    "addFood": "Add {name}",
    "originalAlt": "{name} — original",
    "loadError": "Could not load assets. Please reload the page and try again.",
    "choosePortrait": "Choose a portrait",
    "studio": "Portrait collage studio",
    "canvas": "Collage canvas. Drag to move, use the lower-right handle to resize, and the top handle to rotate.",
    "deleteSelected": "Delete selected food",
    "flipHSelected": "Flip selected food horizontally",
    "flipVSelected": "Flip selected food vertically",
    "undo": "Undo",
    "redo": "Redo",
    "undoTitle": "Undo (Cmd/Ctrl+Z)",
    "redoTitle": "Redo (Cmd/Ctrl+Shift+Z)",
    "editSelected": "Edit selected food",
    "transformSelected": "Transform selected food",
    "mirrorH": "Mirror left to right",
    "mirrorV": "Mirror top to bottom",
    "backwardTitle": "Move back one layer",
    "forwardTitle": "Move forward one layer",
    "duplicateTitle": "Duplicate (Cmd/Ctrl+D)",
    "deleteTitle": "Delete (Delete/Backspace)",
    "selectFood": "Select food on the canvas",
    "portrait.zhu": "Zhu Yuanzhang",
    "portrait.euro": "Rudolf II",
    "artist.euro": "Hans von Aachen",
    "food.pumpkin": "Pumpkin",
    "food.mango": "Mango",
    "food.potato": "Potato",
    "food.pear": "Pear",
    "food.chili": "Chili",
    "food.lettuce": "Lettuce",
    "food.shiitake": "Shiitake",
    "food.eggplant": "Eggplant",
    "food.blueberry": "Blueberry",
    "food.banana": "Banana",
    "food.bean": "Green bean",
    "food.cucumber": "Cucumber",
    "food.carrot": "Carrot",
    "food.walnut": "Walnut",
    "food.ginger": "Ginger",
    "food.strawberry": "Strawberry",
    "collectionNotice": "Data collection has ended. This website is now for entertainment only.",
    "resetNotice": "Refreshing clears your collages. Nothing is saved automatically."
  },
  "zh": {
    "title": "FoodFace — 食物肖像拼贴工作台",
    "task": "食物拼贴体验",
    "taskGoal": "通过视觉联想完成食物人脸拼贴。自由使用和组合提供的食物来替代面部特征，并表现人物的独特之处。",
    "taskRules": "任选一幅肖像，自由组合提供的 16 种食物。同一种食物可重复使用，你可以移动、旋转、翻转和等比例缩放食物。",
    "original": "原图",
    "collage": "拼贴",
    "library": "食物素材",
    "clear": "清空",
    "noSelection": "未选择",
    "size": "大小",
    "rotation": "旋转",
    "flipH": "左右翻转",
    "flipV": "上下翻转",
    "backward": "下移一层",
    "forward": "上移一层",
    "duplicate": "复制食物",
    "delete": "删除",
    "layers": "图层",
    "loading": "加载中…",
    "itemOne": "{count} 个食物",
    "itemMany": "{count} 个食物",
    "addFood": "添加{name}",
    "originalAlt": "{name}原图",
    "loadError": "无法加载素材，请刷新页面重试。",
    "choosePortrait": "选择肖像",
    "studio": "肖像拼贴工作区",
    "canvas": "拼贴画布：拖动可移动食物，右下角手柄可缩放，顶部手柄可旋转。",
    "deleteSelected": "删除选中食物",
    "flipHSelected": "左右翻转选中食物",
    "flipVSelected": "上下翻转选中食物",
    "undo": "撤销",
    "redo": "重做",
    "undoTitle": "撤销（Cmd/Ctrl+Z）",
    "redoTitle": "重做（Cmd/Ctrl+Shift+Z）",
    "editSelected": "编辑选中食物",
    "transformSelected": "调整选中食物",
    "mirrorH": "左右镜像翻转",
    "mirrorV": "上下镜像翻转",
    "backwardTitle": "下移一层",
    "forwardTitle": "上移一层",
    "duplicateTitle": "复制食物（Cmd/Ctrl+D）",
    "deleteTitle": "删除（Delete/Backspace）",
    "selectFood": "选择画布中的食物",
    "portrait.zhu": "朱元璋",
    "portrait.euro": "鲁道夫二世",
    "artist.euro": "汉斯·冯·亚琛",
    "food.pumpkin": "南瓜",
    "food.mango": "芒果",
    "food.potato": "土豆",
    "food.pear": "梨",
    "food.chili": "辣椒",
    "food.lettuce": "生菜",
    "food.shiitake": "香菇",
    "food.eggplant": "茄子",
    "food.blueberry": "蓝莓",
    "food.banana": "香蕉",
    "food.bean": "豆角",
    "food.cucumber": "黄瓜",
    "food.carrot": "胡萝卜",
    "food.walnut": "核桃",
    "food.ginger": "生姜",
    "food.strawberry": "草莓",
    "collectionNotice": "目前数据收集阶段已经停止，该网站仅供娱乐体验。",
    "resetNotice": "刷新页面会清空拼贴内容，作品不会自动保存。"
  }
};
  const i18n = {
    language: "en",
    t(key, values = {}, language = this.language) {
      return (messages[language][key] ?? messages.en[key] ?? key).replace(
        /\{(\w+)\}/g,
        (_, name) => String(values[name] ?? `{${name}}`),
      );
    },
    apply(language) {
      if (!messages[language]) return;
      this.language = language;
      document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        el.textContent = this.t(el.dataset.i18n);
      });
      for (const attribute of ["title", "aria-label"]) {
        document.querySelectorAll(`[data-i18n-${attribute}]`).forEach((el) => {
          el.setAttribute(
            attribute,
            this.t(el.getAttribute(`data-i18n-${attribute}`)),
          );
        });
      }
      document.querySelectorAll("[data-language]").forEach((button) => {
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.language === language),
        );
      });
    },
  };
  window.FOODFACE_I18N = i18n;
})();
