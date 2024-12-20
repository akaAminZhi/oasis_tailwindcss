import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createCabin(cabin, id) {
  // const { name, maxCapasity, discount, description, regularPrice } = cabin;
  // https://lkkwtdwwxjdinexskbqb.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  // console.log(cabin);
  // console.log(id);

  const hasImagePath = cabin.image?.startsWith?.(supabaseUrl);

  // 1 create cabin
  const imageName = `${Math.random()}-${cabin.image.name}`.replaceAll("/", "");
  const imagePath = hasImagePath
    ? cabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // console.log(imagePath);
  let query = supabase.from("cabins");
  // carete
  if (!id) query = query.insert({ ...cabin, image: imagePath });
  // edit cabin
  if (id) query = query.update({ ...cabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  if (hasImagePath) return data;
  // 2 upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabin.image);

  // 3. Delete the cabin IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }
  return data;
}
