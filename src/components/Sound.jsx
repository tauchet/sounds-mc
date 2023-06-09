export function Sound({ id, path }) {
    return (
        <div className="Sound">
            <p className="SoundTitle">{id}</p>
            <audio src={`https://assets.mcasset.cloud/1.8.9/assets/minecraft/sounds/${path}.ogg`} controls></audio>
        </div>
    )
}